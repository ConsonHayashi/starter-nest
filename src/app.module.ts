import { Module } from '@nestjs/common';



import { DictionaryModule } from './core/dictionary/dictionary.module';
import { AppMysqlModule } from './app.mysql.module';
import { Connection } from 'typeorm';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './base/http-exception.filter';
import { LoginModule } from './core/login/login.module';
import { AppMailModule } from './app.mail.module';



@Module({
  imports: [
    AppMysqlModule,
    DictionaryModule,
    LoginModule,
    AppMailModule,
  ],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {
  constructor(
    private readonly connection: Connection
  ) { }
}
