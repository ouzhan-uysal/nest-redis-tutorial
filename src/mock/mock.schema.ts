import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MockDocument = HydratedDocument<Mock>;

@Schema()
export class Mock {
  @Prop()
  id: number;

  @Prop(String)
  first_name: string;

  @Prop(String)
  second_name: string;

  @Prop(String)
  email: string;

  @Prop(String)
  gender: string;

  @Prop(String)
  ip_address: string;

  @Prop(String)
  src: string;
}

export const MockSchema = SchemaFactory.createForClass(Mock);
