import { Schema, Prop, SchemaFactory } from "@nestjs/mongoose";
// import { Document } from "mongoose";
import { HydratedDocument } from 'mongoose';

export type WorkDocument = HydratedDocument<Work>;

@Schema()
export class Work {
  @Prop({ required: true })
  title: string;

  @Prop()
  description: string;

  @Prop()
  imageUrl: string;

  @Prop()
  clientUrl: string;

  @Prop({ default: 'visible' })
  status: string;
}
// export type WorkDocument = Work & Document;

export const WorkSchema = SchemaFactory.createForClass(Work);