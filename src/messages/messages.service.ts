import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MessageDocument, Messages } from './entities/message.entity';

@Injectable()
export class MessagesService {
  constructor(
    @InjectModel(Messages.name)
    private readonly messageModel: Model<MessageDocument>,
  ) {}

  async create(createMessageDto: CreateMessageDto) {
    const message = new this.messageModel({ ...createMessageDto });
    return await message.save();
  }

  async findAll() {
    return await this.messageModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} message`;
  }

  update(id: number, updateMessageDto: UpdateMessageDto) {
    return `This action updates a #${id} message`;
  }

  remove(id: number) {
    return `This action removes a #${id} message`;
  }
}
