import { IsString, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ReplyContactDto {
  @ApiProperty({ description: 'The reply message content' })
  @IsString()
  @IsNotEmpty()
  message: string;
}
