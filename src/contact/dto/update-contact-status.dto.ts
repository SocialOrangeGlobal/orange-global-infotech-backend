import { IsEnum, IsNotEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { InquiryStatus } from '@prisma/client';

export class UpdateContactStatusDto {
  @ApiProperty({ enum: InquiryStatus, description: 'New status for the inquiry' })
  @IsEnum(InquiryStatus)
  @IsNotEmpty()
  status: InquiryStatus;
}
