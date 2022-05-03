import { Module } from '@nestjs/common';

import { FileController } from '../layer/http/index.controller';

@Module({
  controllers: [FileController],
})
export class FileModule { }
