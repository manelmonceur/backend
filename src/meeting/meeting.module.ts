import { Module } from '@nestjs/common';
import { MeetingService } from './meeting.service';
import { MeetingController } from './meeting.controller';
import forFeatureDb from 'src/db/for-feature.db';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature(forFeatureDb)],
  controllers: [MeetingController],
  providers: [MeetingService],
})
export class MeetingModule {}
