## flina-nest-starter

typeOrm 
- 实体类中name属性无效
- 实体类仅有id也可以完成restful接口


## 数据库连接

数据库连接使用module，该module有app.module引入。

```
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // 数据库类型
      host: 'localhost', // 数据库ip地址
      port: 3306, // 端口
      username: 'root', // 登录名
      password: '*******', // 密码
      database: 'flina', // 数据库名称
      entities: [__dirname + '/**/*.entity{.ts,.js}'], // 扫描本项目中.entity.ts或者.entity.js的文件
      // 禁用，不允许修改数据库表结构
      // synchronize: true, // 定义数据库表结构与实体类字段同步(这里一旦数据库少了字段就会自动加入,根据需要来使用),
      // namingStrategy: new SnakeNamingStrategy(),
    }),
  ],
  exports: [TypeOrmModule]
})
export class AppMysqlModule {}
```

## 邮件服务器连接

```
@Module({
  imports: [
    MailerModule.forRoot({
      transport: {
        host: 'smtp.qq.com',
        port: 25,
        ignoreTLS: true,
        secure: false,
        auth: {
          user: '1745509482@qq.com',
          pass: '*********', // stmp 16位验证码
        },
      },
      defaults: {
        from: 'dongqinglin 1745509482',
      },
      preview: false,
      template: {
        dir: process.cwd() + "/src/base",
        adapter: new EjsAdapter(), // or new PugAdapter() or new EjsAdapter()
        options: {
          strict: true,
        },
      },
    })
  ],
  providers: [EmailService],
})
```
