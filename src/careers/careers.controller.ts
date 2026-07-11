import { Controller, Get, Param } from '@nestjs/common';
import { CareersService } from './careers.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('careers')
@Controller('careers')
export class CareersController {
  constructor(private readonly careersService: CareersService) {}

  @Get()
  @ApiOperation({ summary: 'Get all active careers' })
  findAll() {
    return this.careersService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Get a career by ID' })
  findOne(@Param('id') id: string) {
    return this.careersService.findOne(id);
  }
}
