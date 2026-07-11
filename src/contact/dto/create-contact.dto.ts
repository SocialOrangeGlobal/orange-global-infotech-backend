import { IsString, IsEmail, IsOptional, MinLength, Matches } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateContactDto {
  @ApiProperty({ example: 'John Doe', description: 'Name of the sender' })
  @IsString()
  @MinLength(2)
  name: string;

  @ApiProperty({ example: 'john@example.com', description: 'Email address' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: '+919876543210', description: 'Phone number', required: false })
  @IsOptional()
  @IsString()
  phone?: string;

  @ApiProperty({ example: 'Acme Corp', description: 'Company name', required: false })
  @IsOptional()
  @IsString()
  company?: string;

  @ApiProperty({ example: 'Web Development', description: 'Service requested', required: false })
  @IsOptional()
  @IsString()
  service?: string;

  @ApiProperty({ example: '$15,000 - $50,000', description: 'Budget range', required: false })
  @IsOptional()
  @IsString()
  budget?: string;

  @ApiProperty({ example: 'Project Inquiry', description: 'Subject of the message', required: false })
  @IsOptional()
  @IsString()
  subject?: string;

  @ApiProperty({ example: 'I would like to discuss a project...', description: 'Message content' })
  @IsString()
  @MinLength(2)
  message: string;
}
