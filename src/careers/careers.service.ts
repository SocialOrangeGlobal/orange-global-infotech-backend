import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateCareerDto } from './dto/create-career.dto';
import { UpdateCareerDto } from './dto/update-career.dto';

@Injectable()
export class CareersService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.career.findMany({
      where: { isActive: true },
      orderBy: { createdAt: 'desc' },
    });
  }

  async findOne(id: string) {
    const career = await this.prisma.career.findUnique({ where: { id } });
    if (!career) throw new NotFoundException('Career not found');
    return career;
  }

  create(data: CreateCareerDto) {
    return this.prisma.career.create({ data });
  }

  update(id: string, data: UpdateCareerDto) {
    return this.prisma.career.update({ where: { id }, data });
  }

  remove(id: string) {
    return this.prisma.career.delete({ where: { id } });
  }
}
