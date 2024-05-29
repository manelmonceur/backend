import { Injectable } from '@nestjs/common';
import { CreateMeetingDto } from './dto/create-meeting.dto';
import { UpdateMeetingDto } from './dto/update-meeting.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Meeting, MeetingDocument } from './entities/meeting.entity';
import { Model } from 'mongoose';

@Injectable()
export class MeetingService {
  constructor(
    @InjectModel(Meeting.name)
    private readonly meetingModel: Model<MeetingDocument>,
  ) {}

  async create(createMeetingDto: CreateMeetingDto) {
    const meet = new this.meetingModel({
      ...createMeetingDto,
    });
    return meet.save();
  }

  async findAll() {
    return await this.meetingModel.find().exec();
  }

  async findOne(id: number) {
    return `This action returns a #${id} meeting`;
  }

  async update(id: number, updateMeetingDto: UpdateMeetingDto) {
    return `This action updates a #${id} meeting`;
  }

  async remove(id: number) {
    return `This action removes a #${id} meeting`;
  }
}
