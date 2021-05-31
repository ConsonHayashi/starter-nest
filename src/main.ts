import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { port, swaggerDocumentOption } from './main.const';
import { HttpExceptionFilter } from './base/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const document = SwaggerModule.createDocument(app, swaggerDocumentOption);
  SwaggerModule.setup('/api', app, document);
  app.useGlobalFilters(new HttpExceptionFilter())
  await app.listen(port);
}
bootstrap();
