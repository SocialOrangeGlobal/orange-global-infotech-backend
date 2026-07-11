import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateWebsiteContentDto } from './dto/create-website-content.dto';
import { UpdateWebsiteContentDto } from './dto/update-website-content.dto';

@Injectable()
export class WebsiteContentService {
  constructor(private prisma: PrismaService) { }

  findAll() {
    return this.prisma.websiteContent.findMany();
  }

  async findOne(sectionKey: string) {
    const content = await this.prisma.websiteContent.findUnique({
      where: { sectionKey },
    });
    if (!content) throw new NotFoundException('Content not found');
    return content;
  }

  create(data: CreateWebsiteContentDto) {
    return this.prisma.websiteContent.create({ data });
  }

  update(id: string, data: UpdateWebsiteContentDto) {
    return this.prisma.websiteContent.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prisma.websiteContent.delete({ where: { id } });
  }
}
