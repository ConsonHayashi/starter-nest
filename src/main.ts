import * as pkg from 'package.json';

import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';
import { HttpExceptionFilter } from './layer/pipe/exception.filter';
import { reqresLogger } from './layer/pipe/logger.middleware';

function checkPackageJsonFile() {
  let flag = pkg.port && pkg.version && pkg.author && pkg.name;
  if (!flag) { throw new Error('The package.json must include flieds named port, version, author and name!!!'); }
}

async function bootstrap() {
  checkPackageJsonFile()
  const app = await NestFactory.create(AppModule);
  app.use(reqresLogger);
  app.useGlobalFilters(new HttpExceptionFilter())
  await app.listen(pkg.port);
  console.info(`The app is running at http://localhost:${pkg.port}`)
  console.info(`The document is at http://localhost:${pkg.port}/api`)
}

bootstrap();




