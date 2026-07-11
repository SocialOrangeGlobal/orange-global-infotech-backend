import { Injectable, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Resend } from 'resend';

@Injectable()
export class MailService {
  private resend: Resend;
  private readonly logger = new Logger(MailService.name);

  constructor(private readonly configService: ConfigService) {
    const apiKey = this.configService.get<string>('RESEND_API_KEY');
    this.resend = new Resend(apiKey);
  }

  async sendContactAdminNotification(contact: any) {
    if (this.configService.get<string>('RESEND_API_KEY') === 're_PLACEHOLDER_KEY') {
      this.logger.log(`[MOCK] Simulated sending admin notification for contact: ${contact.id}`);
      return;
    }
    try {
      const adminEmail = this.configService.get<string>('ADMIN_EMAIL');
      const from = this.configService.get<string>('MAIL_FROM');

      await this.resend.emails.send({
        from,
        to: adminEmail,
        subject: `New Contact Inquiry: ${contact.subject}`,
        html: `
          <h3>New Contact Inquiry Received</h3>
          <p><strong>Name:</strong> ${contact.name}</p>
          <p><strong>Email:</strong> ${contact.email}</p>
          <p><strong>Phone:</strong> ${contact.phone || 'N/A'}</p>
          <p><strong>Subject:</strong> ${contact.subject}</p>
          <p><strong>Date:</strong> ${new Date(contact.createdAt).toLocaleString()}</p>
          <hr/>
          <h4>Message:</h4>
          <p>${contact.message.replace(/\n/g, '<br/>')}</p>
        `,
      });
      this.logger.log('Admin notification email sent successfully via Resend');
    } catch (error) {
      this.logger.error('Failed to send admin notification email via Resend', error);
    }
  }

  async sendContactAutoReply(contact: any) {
    if (this.configService.get<string>('RESEND_API_KEY') === 're_PLACEHOLDER_KEY') {
      this.logger.log(`[MOCK] Simulated sending auto-reply email to: ${contact.email}`);
      return;
    }
    try {
      const from = this.configService.get<string>('MAIL_FROM');

      // Note: On free tier, 'to' must be the verified Resend account email.
      // Assuming contact.email is a valid verified email for testing, or we log a warning.
      await this.resend.emails.send({
        from,
        to: contact.email,
        subject: 'Thank you for contacting Orange Global Infotech',
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">
            <h2>Thank You for Contacting Us</h2>
            <p>Dear ${contact.name},</p>
            <p>Thank you for getting in touch with Orange Global Infotech. We have successfully received your inquiry regarding <strong>"${contact.subject}"</strong>.</p>
            <p>Our team is currently reviewing your message and will get back to you within 24-48 hours.</p>
            <br/>
            <p>Best Regards,</p>
            <p><strong>Orange Global Infotech Team</strong></p>
          </div>
        `,
      });
      this.logger.log('Auto-reply email sent successfully via Resend');
    } catch (error) {
      this.logger.error('Failed to send auto-reply email via Resend', error);
    }
  }

  async sendReply(contact: any, replyMessage: string) {
    if (this.configService.get<string>('RESEND_API_KEY') === 're_PLACEHOLDER_KEY') {
      this.logger.log(`[MOCK] Simulated sending reply email to: ${contact.email}`);
      return;
    }
    try {
      const from = this.configService.get<string>('MAIL_FROM');

      await this.resend.emails.send({
        from,
        to: contact.email,
        subject: `Re: ${contact.subject}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">
            <p>Dear ${contact.name},</p>
            <p>${replyMessage.replace(/\n/g, '<br/>')}</p>
            <br/>
            <p>Best Regards,</p>
            <p><strong>Orange Global Infotech Team</strong></p>
            <hr style="margin-top: 20px; border: none; border-top: 1px solid #eee;" />
            <div style="color: #666; font-size: 12px; margin-top: 10px;">
              <p>On ${new Date(contact.createdAt).toLocaleString()}, you wrote:</p>
              <blockquote style="border-left: 2px solid #ccc; margin-left: 0; padding-left: 10px;">
                ${contact.message.replace(/\n/g, '<br/>')}
              </blockquote>
            </div>
          </div>
        `,
      });
      this.logger.log('Reply email sent successfully via Resend');
    } catch (error) {
      this.logger.error('Failed to send reply email via Resend', error);
      throw error;
    }
  }
}
