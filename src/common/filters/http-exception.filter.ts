import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly logger = new Logger(HttpExceptionFilter.name);

  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    
    let status = HttpStatus.INTERNAL_SERVER_ERROR;
    let message = 'Internal server error';
    let errorResponse = null;

    if (exception instanceof HttpException) {
      status = exception.getStatus();
      const res = exception.getResponse();
      message = typeof res === 'string' ? res : (res as any).message || exception.message;
      errorResponse = typeof res === 'object' ? res : null;
    } else if (exception instanceof Error) {
      message = exception.message;
    }

    if (status >= 500) {
      this.logger.error(`Status: ${status} Error: ${message}`, exception instanceof Error ? exception.stack : '');
    } else if (status !== HttpStatus.NOT_FOUND) {
      this.logger.warn(`Status: ${status} Error: ${message}`);
    }

    response.status(status).json({
      success: false,
      message: Array.isArray(message) ? message[0] : message, // If class-validator returns an array
      error: exception instanceof Error ? exception.name : 'Error',
      statusCode: status,
      ...(errorResponse && typeof errorResponse === 'object' && !Array.isArray(errorResponse) ? errorResponse : {}),
    });
  }
}
