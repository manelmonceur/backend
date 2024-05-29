import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ParentDocument = Parent & Document;

@Schema({
  toJSON: {
    getters: true,
    virtuals: true,
  },
  timestamps: true,
})
export class Parent {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true, unique: true })
  email: string;

  @Prop({ required: true })
  phone: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  dateRange: [string, string];

  @Prop({ default: false })
  activate: boolean;
}

export const ParentSchema = SchemaFactory.createForClass(Parent);
