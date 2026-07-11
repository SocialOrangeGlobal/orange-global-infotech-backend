import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  UseGuards,
} from '@nestjs/common';
import { AdminService } from './admin.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { UpdateContactStatusDto } from '../contact/dto/update-contact-status.dto';
import { ReplyContactDto } from '../contact/dto/reply-contact.dto';
import { CreateWebsiteContentDto } from '../website-content/dto/create-website-content.dto';
import { UpdateWebsiteContentDto } from '../website-content/dto/update-website-content.dto';
import { CreateServiceDto } from '../services/dto/create-service.dto';
import { UpdateServiceDto } from '../services/dto/update-service.dto';
import { CreateProjectDto } from '../projects/dto/create-project.dto';
import { UpdateProjectDto } from '../projects/dto/update-project.dto';
import { CreateCareerDto } from '../careers/dto/create-career.dto';
import { UpdateCareerDto } from '../careers/dto/update-career.dto';

@ApiTags('admin')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('admin')
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  // ─── Dashboard ───────────────────────────────────────────────────────────
  @Get('dashboard/stats')
  @ApiOperation({ summary: 'Get dashboard statistics' })
  @ApiResponse({ status: 200, description: 'Dashboard stats returned successfully' })
  getDashboardStats() {
    return this.adminService.getDashboardStats();
  }

  // ─── Website Content ─────────────────────────────────────────────────────
  @Post('website-content')
  @ApiOperation({ summary: 'Create website content section' })
  createWebsiteContent(@Body() data: CreateWebsiteContentDto) {
    return this.adminService.createWebsiteContent(data);
  }

  @Patch('website-content/:id')
  @ApiOperation({ summary: 'Update website content section' })
  updateWebsiteContent(
    @Param('id') id: string,
    @Body() data: UpdateWebsiteContentDto,
  ) {
    return this.adminService.updateWebsiteContent(id, data);
  }

  @Delete('website-content/:id')
  @ApiOperation({ summary: 'Delete website content section' })
  removeWebsiteContent(@Param('id') id: string) {
    return this.adminService.removeWebsiteContent(id);
  }

  // ─── Services ────────────────────────────────────────────────────────────
  @Post('services')
  @ApiOperation({ summary: 'Create a service' })
  createService(@Body() data: CreateServiceDto) {
    return this.adminService.createService(data);
  }

  @Patch('services/:id')
  @ApiOperation({ summary: 'Update a service' })
  updateService(@Param('id') id: string, @Body() data: UpdateServiceDto) {
    return this.adminService.updateService(id, data);
  }

  @Delete('services/:id')
  @ApiOperation({ summary: 'Delete a service' })
  removeService(@Param('id') id: string) {
    return this.adminService.removeService(id);
  }

  // ─── Projects ────────────────────────────────────────────────────────────
  @Post('projects')
  @ApiOperation({ summary: 'Create a project' })
  createProject(@Body() data: CreateProjectDto) {
    return this.adminService.createProject(data);
  }

  @Patch('projects/:id')
  @ApiOperation({ summary: 'Update a project' })
  updateProject(@Param('id') id: string, @Body() data: UpdateProjectDto) {
    return this.adminService.updateProject(id, data);
  }

  @Delete('projects/:id')
  @ApiOperation({ summary: 'Delete a project' })
  removeProject(@Param('id') id: string) {
    return this.adminService.removeProject(id);
  }

  // ─── Careers ─────────────────────────────────────────────────────────────
  @Post('careers')
  @ApiOperation({ summary: 'Create a career listing' })
  createCareer(@Body() data: CreateCareerDto) {
    return this.adminService.createCareer(data);
  }

  @Patch('careers/:id')
  @ApiOperation({ summary: 'Update a career listing' })
  updateCareer(@Param('id') id: string, @Body() data: UpdateCareerDto) {
    return this.adminService.updateCareer(id, data);
  }

  @Delete('careers/:id')
  @ApiOperation({ summary: 'Delete a career listing' })
  removeCareer(@Param('id') id: string) {
    return this.adminService.removeCareer(id);
  }

  // ─── Contact Inquiries ────────────────────────────────────────────────────
  @Get('contact-inquiries')
  @ApiOperation({ summary: 'Get all contact inquiries' })
  getContactInquiries() {
    return this.adminService.getContactInquiries();
  }

  @Get('contact-inquiries/:id')
  @ApiOperation({ summary: 'Get a single contact inquiry' })
  getContactInquiry(@Param('id') id: string) {
    return this.adminService.getContactInquiry(id);
  }

  @Patch('contact-inquiries/:id/status')
  @ApiOperation({ summary: 'Update contact inquiry status' })
  updateContactInquiryStatus(
    @Param('id') id: string,
    @Body() data: UpdateContactStatusDto,
  ) {
    return this.adminService.updateContactInquiryStatus(id, data);
  }

  @Post('contact-inquiries/:id/reply')
  @ApiOperation({ summary: 'Reply to a contact inquiry via email' })
  replyToContactInquiry(
    @Param('id') id: string,
    @Body() data: ReplyContactDto,
  ) {
    return this.adminService.replyToContactInquiry(id, data);
  }

  @Delete('contact-inquiries/:id')
  @ApiOperation({ summary: 'Delete a contact inquiry' })
  removeContactInquiry(@Param('id') id: string) {
    return this.adminService.removeContactInquiry(id);
  }
}
