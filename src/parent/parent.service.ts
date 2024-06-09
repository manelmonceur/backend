import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateParentDto } from './dto/create-parent.dto';
import { UpdateParentDto } from './dto/update-parent.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Parent, ParentDocument } from './entities/parent.entity';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';
import { User, UserDocument } from 'src/user/entities/user.entity';
import { UpdateUserDto } from 'src/user/user.dto';

@Injectable()
export class ParentService {
  constructor(
    @InjectModel(Parent.name)
    private readonly parentModel: Model<ParentDocument>,
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async create(createParentDto: CreateParentDto) {
    const existingParent = await this.parentModel
      .findOne({
        email: createParentDto.email,
      })
      .exec();
    if (!!existingParent) throw new BadRequestException('Email Exist');
    const { password, ...rest } = createParentDto;
    const hashedPassword = await bcrypt.hash(password, 10);
    const createdParent = new this.parentModel({
      ...rest,
      password: hashedPassword,
    });
    return createdParent.save();
  }

  async findAll() {
    return await this.parentModel.find().exec();
  }

  async findOne(id: string) {
    const parent = await this.parentModel.findById(id).exec();
    if (!parent) {
      throw new NotFoundException('parent not found');
    }
    return parent;
  }

  async update(id: string, updateParentDto: UpdateUserDto) {
    const { password, ...rest } = updateParentDto;
    const hashedPassword = password
      ? await bcrypt.hash(password, 10)
      : undefined;
    const updatedUser = await this.userModel.findByIdAndUpdate(
      id,
      { ...rest, ...(hashedPassword && { password: hashedPassword }) },
      { new: true },
    );
    if (!updatedUser) {
      throw new NotFoundException('User not found');
    }
    return updatedUser;
  }

  async remove(id: string) {
    const deletedUser = await this.userModel.findByIdAndDelete(id).exec();
    if (!deletedUser) {
      throw new NotFoundException('User not found');
    }
    return deletedUser;
  }
}
