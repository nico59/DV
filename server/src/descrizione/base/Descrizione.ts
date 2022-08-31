/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Capitolo } from "../../capitolo/base/Capitolo";
import { ValidateNested, IsOptional, IsDate, IsString } from "class-validator";
import { Type } from "class-transformer";
import { Opera } from "../../opera/base/Opera";
@ObjectType()
class Descrizione {
  @ApiProperty({
    required: false,
    type: () => [Capitolo],
  })
  @ValidateNested()
  @Type(() => Capitolo)
  @IsOptional()
  capitolo?: Array<Capitolo>;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  createdAt!: Date;

  @ApiProperty({
    required: true,
    type: String,
  })
  @IsString()
  @Field(() => String)
  id!: string;

  @ApiProperty({
    required: false,
    type: () => Opera,
  })
  @ValidateNested()
  @Type(() => Opera)
  @IsOptional()
  operas?: Opera | null;

  @ApiProperty({
    required: true,
  })
  @IsDate()
  @Type(() => Date)
  @Field(() => Date)
  updatedAt!: Date;
}
export { Descrizione };
