import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { mysqlconf } from '../main.const.ts.example';

@Module({
  imports: [
    TypeOrmModule.forRoot(mysqlconf),
  ],
  exports: [TypeOrmModule]
})
export class AppMysqlModule { }
