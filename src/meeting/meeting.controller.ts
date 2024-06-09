import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MeetingService } from './meeting.service';
import { CreateMeetingDto } from './dto/create-meeting.dto';
import { UpdateMeetingDto } from './dto/update-meeting.dto';

@Controller('meeting')
export class MeetingController {
  constructor(private readonly meetingService: MeetingService) {}

  @Post()
  async create(@Body() createMeetingDto: CreateMeetingDto) {
    return await this.meetingService.create(createMeetingDto);
  }

  @Get()
  async findAll() {
    return await this.meetingService.findAll();
  }

  @Post('find')
  async find(@Body() condition: any) {
    return await this.meetingService.find(condition);
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.meetingService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMeetingDto: UpdateMeetingDto) {
    return this.meetingService.update(id, updateMeetingDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.meetingService.remove(id);
  }
}
