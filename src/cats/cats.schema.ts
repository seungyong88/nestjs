// import {  } from "@nestjs/mongoose";

import { Prop, Schema, SchemaFactory, SchemaOptions } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsString } from "class-validator";
import { Document } from "mongoose";


const options: SchemaOptions = {
  timestamps: true,
}


@Schema(options)
export class Cat extends Document {
  @ApiProperty({
    example: 'gosng2001@naver.com',
    description: 'email',
    required: true,
  })
  @Prop({
    required: true,
    unique: true,
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;
  
  @ApiProperty({
    example: 'username',
    description: 'name',
    required: true,
  })
  @Prop({
    required: true,
    unique: true,
  })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: '238114',
    description: 'password',
    required: true,
  })
  @Prop({
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  password: string;

  @Prop()
  @IsString()
  imgUrl: string;

  readonly readOnlyData: { id: string, email: string, name: string }
}

export const CatSchema = SchemaFactory.createForClass(Cat);

CatSchema.virtual('readOnlyData').get(function (this: Cat) {
  return {
    id: this.id,
    email: this.email,
    name: this.name,
  }
})

// import { Prop, Schema, SchemaFactory, SchemaOptions } from "@nestjs/mongoose";
// import { IsEmail, IsNotEmpty, IsString } from "class-validator";
// import { Document } from 'mongoose';

// const options: SchemaOptions = {
//   timestamps: true,
// }


// export const CatSchema = SchemaFactory.createForClass(Cat);

// CatSchema.virtual('readOnlyData').get(function (this: Cat) {
//   return {
//     id: this.id,
//     email: this.email,
//     name: this.name
//   }
// })