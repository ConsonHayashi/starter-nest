import * as pkg from 'package.json';

import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { swaggerconfig } from './main.const';
import { reqresLogger } from './pipe/logger.middleware';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  SwaggerModule.setup('/api', app, SwaggerModule.createDocument(app, swaggerconfig));
  app.use(reqresLogger);

  await app.listen(pkg.port);
  console.info(`The app is running at http://localhost:${pkg.port}`)
  console.info(`The document is at http://localhost:${pkg.port}/api`)
}

bootstrap();
