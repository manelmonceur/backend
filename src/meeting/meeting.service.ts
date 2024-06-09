import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateMeetingDto } from './dto/create-meeting.dto';
import { UpdateMeetingDto } from './dto/update-meeting.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Meeting, MeetingDocument } from './entities/meeting.entity';
import { Model } from 'mongoose';
import { MailerService } from './mailer.service';

@Injectable()
export class MeetingService {
  private mailerService: MailerService;

  constructor(
    @InjectModel(Meeting.name)
    private readonly meetingModel: Model<MeetingDocument>,
  ) {
    this.mailerService = new MailerService();
  }

  async create(createMeetingDto: CreateMeetingDto) {
    const meet = new this.meetingModel({
      ...createMeetingDto,
    });
    try {
      const subject: string = 'Meeting Link';
      const content: string = `The meeting link is ${createMeetingDto.link}`;
      this.mailerService.sendMail(
        createMeetingDto.parent_email,
        subject,
        content,
      );
    } catch (e) {}
    return await meet.save();
  }

  async find(condition: any) {
    return await this.meetingModel.find({ ...condition }).exec();
  }

  async findAll() {
    return await this.meetingModel.find().exec();
  }

  async findOne(id: string) {
    return `This action returns a #${id} meeting`;
  }

  async update(id: string, updateMeetingDto: UpdateMeetingDto) {
    return `This action updates a #${id} meeting`;
  }

  async remove(id: string) {
    const meet = await this.meetingModel.findByIdAndDelete(id).exec();
    if (!meet) {
      throw new NotFoundException('Meet not found');
    }
    return meet;
  }
}
