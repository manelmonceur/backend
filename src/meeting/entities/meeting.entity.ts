import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MeetingDocument = Meeting & Document;

@Schema({
  toJSON: {
    getters: true,
    virtuals: true,
  },
  timestamps: true,
})
export class Meeting {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  parent: string;

  @Prop({ required: true })
  parent_email: string;

  @Prop({ required: true })
  mentor: string;

  @Prop({ required: true })
  mentor_email: string;

  @Prop({ required: true })
  admin: string;

  @Prop({ required: true })
  admin_email: string;

  @Prop({ required: true })
  date: string;

  @Prop({ required: true })
  link: string;
}

export const MeetingSchema = SchemaFactory.createForClass(Meeting);
