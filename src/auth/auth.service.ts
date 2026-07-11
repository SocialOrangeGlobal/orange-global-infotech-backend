import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { AdminLoginDto } from './dto/admin-login.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private readonly configService: ConfigService,
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
  ) {}

  async login(loginDto: AdminLoginDto) {
    const { email, password } = loginDto;
    
    const adminEmail = this.configService.get<string>('ADMIN_EMAIL');
    const adminPasswordHash = this.configService.get<string>('ADMIN_PASSWORD_HASH');

    if (!adminEmail || !adminPasswordHash) {
      this.logger.error('ADMIN_EMAIL or ADMIN_PASSWORD_HASH is not configured in environment variables');
      throw new UnauthorizedException('Authentication configuration error');
    }

    if (email !== adminEmail) {
      this.logger.warn(`Failed admin login attempt with incorrect email: ${email}`);
      throw new UnauthorizedException('Invalid credentials');
    }

    // Compare the provided password against the bcrypt hash stored in env
    const isMatch = await bcrypt.compare(password, adminPasswordHash);

    if (!isMatch) {
      this.logger.warn('Failed admin login attempt with incorrect password');
      throw new UnauthorizedException('Invalid credentials');
    }

    const payload = { role: 'SUPER_ADMIN', sub: 'admin' };

    this.logger.log('Admin logged in successfully');

    return {
      access_token: this.jwtService.sign(payload),
      admin: {
        role: 'SUPER_ADMIN',
        name: 'Super Admin',
      },
    };
  }

  async getProfile() {
    let profileSetting = await this.prisma.setting.findUnique({
      where: { key: 'admin_profile' },
    });

    if (!profileSetting) {
      profileSetting = await this.prisma.setting.create({
        data: {
          key: 'admin_profile',
          value: {
            firstName: 'Super',
            lastName: 'Admin',
            email: this.configService.get<string>('ADMIN_EMAIL'),
            bio: 'Super Administrator',
            phone: '',
            avatarUrl: '',
            facebook: '',
            twitter: '',
            linkedin: '',
            instagram: '',
          },
        },
      });
    }

    return profileSetting.value;
  }

  async updateProfile(updates: any) {
    const profileSetting = await this.prisma.setting.findUnique({
      where: { key: 'admin_profile' },
    });

    const currentProfile = profileSetting ? (profileSetting.value as any) : {};
    const newProfile = { ...currentProfile, ...updates };

    await this.prisma.setting.upsert({
      where: { key: 'admin_profile' },
      update: { value: newProfile },
      create: { key: 'admin_profile', value: newProfile },
    });

    return newProfile;
  }
}
