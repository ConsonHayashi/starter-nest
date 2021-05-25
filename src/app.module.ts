import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './persons/User.module';
import { WorksModule } from './works/Works.module';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // 数据库类型
      host: 'localhost', // 数据库ip地址
      port: 3306, // 端口
      username: 'root', // 登录名
      password: 'rootroot', // 密码
      database: 'flina', // 数据库名称
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // 扫描本项目中.entity.ts或者.entity.js的文件
      // 禁用，不允许修改数据库表结构
      // synchronize: true, // 定义数据库表结构与实体类字段同步(这里一旦数据库少了字段就会自动加入,根据需要来使用),
      // namingStrategy: new SnakeNamingStrategy(),
    }),
    UserModule,
    WorksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
