import { User, UserSchema } from 'src/user/entities/user.entity';
import { Child, ChildSchema } from 'src/child/entities/child.entity';
import { Course, CourseSchema } from 'src/course/entities/course.entity';
import { Parent, ParentSchema } from 'src/parent/entities/parent.entity';
import { Meeting, MeetingSchema } from 'src/meeting/entities/meeting.entity';
import { MessageSchema, Messages } from 'src/messages/entities/message.entity';

export default [
  { name: User.name, schema: UserSchema },
  { name: Child.name, schema: ChildSchema },
  { name: Course.name, schema: CourseSchema },
  { name: Parent.name, schema: ParentSchema },
  { name: Meeting.name, schema: MeetingSchema },
  { name: Messages.name, schema: MessageSchema },
];
