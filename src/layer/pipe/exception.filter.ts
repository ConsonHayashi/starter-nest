import {
  Request,
  Response,
} from 'express';
import { LogMessage } from 'src/interface/internal/logmessage.internal';

import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {

  catch(exception: HttpException, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const request: Request = context.getRequest();
    const response: Response = context.getResponse();

    const status: number =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const message: string =
      exception.message ||
      "It's an empty message";

    const msgLog: LogMessage = {
      statusCode: status,
      timestamp: new Date().toLocaleString(),
      path: request.url,
      method: request.method,
      message: message,
    }

    Logger.error(
      "异常信息",
      JSON.stringify(msgLog),
      "HttpExceptionFilter"
    )

    response
      .status(status)
      .json(msgLog);
  }
}
