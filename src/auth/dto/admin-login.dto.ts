import { IsString, IsNotEmpty, MinLength, IsEmail } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AdminLoginDto {
  @ApiProperty({
    example: 'admin@orangeglobalinfotech.com',
    description: 'Admin Email',
  })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({
    example: 'admin@123',
    description: 'Admin Password',
  })
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
