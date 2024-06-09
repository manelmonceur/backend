import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto, UpdateUserDto } from './user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from './entities/user.entity';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { Roles } from './entities/Roles';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
    private readonly jwtService: JwtService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    if (createUserDto.role == Roles.PARENT) {
      createUserDto.accountStatus = false;
    }
    const existingUser = await this.userModel
      .findOne({
        email: createUserDto.email,
      })
      .exec();

    if (!!existingUser) throw new BadRequestException('Email Exist');

    const { password, ...rest } = createUserDto;
    const hashedPassword = await bcrypt.hash(password, 10);

    return this.userModel.create({ ...rest, password: hashedPassword });
  }

  findAll() {
    return this.userModel.find().lean();
  }

  findOne(_id: string) {
    return this.userModel.findById(_id).lean();
  }

  async findOneByEmail(email: string) {
    return await this.userModel
      .findOne({
        email,
      })
      .exec();
  }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.findOneByEmail(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: any) {
    const payload = { email: user.email, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
      user: user._doc,
    };
  }

  findByEmail(email: string) {
    return this.userModel.findOne({ email }).lean();
  }

  update(_id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.updateOne({ _id }, updateUserDto);
  }

  remove(_id: string) {
    return this.userModel.deleteOne({ _id });
  }
}
