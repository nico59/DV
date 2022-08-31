/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { OperaWhereInput } from "./OperaWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class OperaListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => OperaWhereInput,
  })
  @ValidateNested()
  @Type(() => OperaWhereInput)
  @IsOptional()
  @Field(() => OperaWhereInput, {
    nullable: true,
  })
  every?: OperaWhereInput;

  @ApiProperty({
    required: false,
    type: () => OperaWhereInput,
  })
  @ValidateNested()
  @Type(() => OperaWhereInput)
  @IsOptional()
  @Field(() => OperaWhereInput, {
    nullable: true,
  })
  some?: OperaWhereInput;

  @ApiProperty({
    required: false,
    type: () => OperaWhereInput,
  })
  @ValidateNested()
  @Type(() => OperaWhereInput)
  @IsOptional()
  @Field(() => OperaWhereInput, {
    nullable: true,
  })
  none?: OperaWhereInput;
}
export { OperaListRelationFilter };
