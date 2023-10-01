import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class DeleteUserInput {
  @Field()
  @IsNotEmpty()
  userId: string;

  @Field({ nullable: false })
  // @IsNotEmpty()
  @IsOptional()
  age?: number;
}
