import { Module } from '@nestjs/common';
import { AuthController } from './auth/auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './user/user.module';
import { ChildModule } from './child/child.module';
import { CourseModule } from './course/course.module';
import { ParentModule } from './parent/parent.module';
import { MeetingModule } from './meeting/meeting.module';
import { JwtModule } from '@nestjs/jwt';
import { MessagesModule } from './messages/messages.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_CONNECTION_STRING),
    JwtModule.register({
      secret: 'SECRET',
      signOptions: { expiresIn: '7d' },
    }),
    UserModule,
    ChildModule,
    CourseModule,
    ParentModule,
    MeetingModule,
    MessagesModule,
  ],
  controllers: [AuthController],
  providers: [],
})
export class AppModule {}
