import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { MailService } from '../mail/mail.service';
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

@Injectable()
export class AdminService {
  constructor(
    private prisma: PrismaService,
    private mailService: MailService,
  ) {}

  // Dashboard Stats
  async getDashboardStats() {
    const [
      totalContacts,
      newContacts,
      totalServices,
      activeServices,
      totalProjects,
      activeProjects,
      featuredProjects,
      totalCareers,
      activeCareers,
      totalWebsiteContent,
      recentContacts,
    ] = await Promise.all([
      this.prisma.contactInquiry.count(),
      this.prisma.contactInquiry.count({ where: { status: 'NEW' } }),
      this.prisma.service.count(),
      this.prisma.service.count({ where: { isActive: true } }),
      this.prisma.project.count(),
      this.prisma.project.count({ where: { isActive: true } }),
      this.prisma.project.count({ where: { isFeatured: true } }),
      this.prisma.career.count(),
      this.prisma.career.count({ where: { isActive: true } }),
      this.prisma.websiteContent.count(),
      this.prisma.contactInquiry.findMany({
        orderBy: { createdAt: 'desc' },
        take: 5,
        select: {
          id: true,
          name: true,
          email: true,
          subject: true,
          status: true,
          createdAt: true,
        },
      }),
    ]);

    return {
      contacts: {
        total: totalContacts,
        new: newContacts,
      },
      services: {
        total: totalServices,
        active: activeServices,
      },
      projects: {
        total: totalProjects,
        active: activeProjects,
        featured: featuredProjects,
      },
      careers: {
        total: totalCareers,
        active: activeCareers,
      },
      websiteContent: {
        total: totalWebsiteContent,
      },
      recentContacts,
    };
  }

  // Website Content
  createWebsiteContent(data: CreateWebsiteContentDto) {
    return this.prisma.websiteContent.create({ data });
  }
  updateWebsiteContent(id: string, data: UpdateWebsiteContentDto) {
    return this.prisma.websiteContent.update({ where: { id }, data });
  }
  removeWebsiteContent(id: string) {
    return this.prisma.websiteContent.delete({ where: { id } });
  }

  // Services
  createService(data: CreateServiceDto) {
    return this.prisma.service.create({ data });
  }
  updateService(id: string, data: UpdateServiceDto) {
    return this.prisma.service.update({ where: { id }, data });
  }
  removeService(id: string) {
    return this.prisma.service.delete({ where: { id } });
  }

  // Projects
  createProject(data: CreateProjectDto) {
    return this.prisma.project.create({ data });
  }
  updateProject(id: string, data: UpdateProjectDto) {
    return this.prisma.project.update({ where: { id }, data });
  }
  removeProject(id: string) {
    return this.prisma.project.delete({ where: { id } });
  }

  // Careers
  createCareer(data: CreateCareerDto) {
    return this.prisma.career.create({ data });
  }
  updateCareer(id: string, data: UpdateCareerDto) {
    return this.prisma.career.update({ where: { id }, data });
  }
  removeCareer(id: string) {
    return this.prisma.career.delete({ where: { id } });
  }

  // Contact Inquiries
  getContactInquiries() {
    return this.prisma.contactInquiry.findMany({ orderBy: { createdAt: 'desc' } });
  }
  async getContactInquiry(id: string) {
    const inquiry = await this.prisma.contactInquiry.findUnique({ where: { id } });
    if (!inquiry) throw new NotFoundException('Inquiry not found');
    return inquiry;
  }
  updateContactInquiryStatus(id: string, data: UpdateContactStatusDto) {
    return this.prisma.contactInquiry.update({ where: { id }, data });
  }

  async replyToContactInquiry(id: string, dto: ReplyContactDto) {
    const inquiry = await this.getContactInquiry(id);
    
    try {
      await this.mailService.sendReply(inquiry, dto.message);
      
      // Update status to REPLIED
      return this.prisma.contactInquiry.update({
        where: { id },
        data: { status: 'REPLIED' },
      });
    } catch (error) {
      throw new BadRequestException('Failed to send reply email');
    }
  }

  removeContactInquiry(id: string) {
    return this.prisma.contactInquiry.delete({ where: { id } });
  }
}
