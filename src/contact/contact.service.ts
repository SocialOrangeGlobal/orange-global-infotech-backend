import { Injectable, Logger, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateContactDto } from './dto/create-contact.dto';
import { MailService } from '../mail/mail.service';

@Injectable()
export class ContactService {
  private readonly logger = new Logger(ContactService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly mailService: MailService,
  ) {}

  async create(createContactDto: CreateContactDto) {
    try {
      const inquiry = await this.prisma.contactInquiry.create({
        data: createContactDto,
      });

      this.logger.log(`New contact inquiry saved: ${inquiry.id}`);

      // Send emails asynchronously
      this.mailService.sendContactAdminNotification(inquiry);
      this.mailService.sendContactAutoReply(inquiry);

      return inquiry;
    } catch (error) {
      this.logger.error('Failed to save contact inquiry', error);
      throw new BadRequestException('Failed to submit inquiry');
    }
  }
}
