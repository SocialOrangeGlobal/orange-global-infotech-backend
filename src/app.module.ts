import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { ContactModule } from './contact/contact.module';
import { MailModule } from './mail/mail.module';
import { WebsiteContentModule } from './website-content/website-content.module';
import { ProjectsModule } from './projects/projects.module';
import { ServicesModule } from './services/services.module';
import { CareersModule } from './careers/careers.module';
import { AdminModule } from './admin/admin.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PrismaModule,
    AuthModule,
    ContactModule,
    MailModule,
    WebsiteContentModule,
    ProjectsModule,
    ServicesModule,
    CareersModule,
    AdminModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
