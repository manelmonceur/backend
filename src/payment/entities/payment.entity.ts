import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PaymentDocument = Payment & Document;

@Schema({
  toJSON: {
    getters: true,
    virtuals: true,
  },
  timestamps: true,
})
export class Payment {
  @Prop({ required: true })
  parent: string;

  @Prop({ required: true })
  parent_email: string;

  @Prop({ required: true })
  teacher: string;

  @Prop({ required: true })
  teacher_email: string;

  @Prop({ required: true })
  child: string;

  @Prop({ required: true })
  formation: string;

  @Prop({ required: true })
  amount: string;
}

export const PaymentSchema = SchemaFactory.createForClass(Payment);
