/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { OperaWhereUniqueInput } from "../../opera/base/OperaWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";
@InputType()
class OperaUpdateManyWithoutMuseosInput {
  @Field(() => [OperaWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OperaWhereUniqueInput],
  })
  connect?: Array<OperaWhereUniqueInput>;

  @Field(() => [OperaWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OperaWhereUniqueInput],
  })
  disconnect?: Array<OperaWhereUniqueInput>;

  @Field(() => [OperaWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [OperaWhereUniqueInput],
  })
  set?: Array<OperaWhereUniqueInput>;
}
export { OperaUpdateManyWithoutMuseosInput };
