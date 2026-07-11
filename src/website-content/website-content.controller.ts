import { Controller, Get, Param } from '@nestjs/common';
import { WebsiteContentService } from './website-content.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('website-content')
@Controller('website-content')
export class WebsiteContentController {
  constructor(private readonly websiteContentService: WebsiteContentService) {}

  @Get()
  @ApiOperation({ summary: 'Get all active website content sections' })
  findAll() {
    return this.websiteContentService.findAll();
  }

  @Get(':sectionKey')
  @ApiOperation({ summary: 'Get website content by section key' })
  findOne(@Param('sectionKey') sectionKey: string) {
    return this.websiteContentService.findOne(sectionKey);
  }
}
