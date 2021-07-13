"use strict";
exports.__esModule = true;
exports.emailconf = exports.mysqlconf = exports.swaggerDocumentOption = exports.tag = exports.port = void 0;
var ejs_adapter_1 = require("@nestjs-modules/mailer/dist/adapters/ejs.adapter");
var swagger_1 = require("@nestjs/swagger");
// server conf
exports.port = 4000;
// swagger conf
exports.tag = {
    core: "核心"
};
exports.swaggerDocumentOption = new swagger_1.DocumentBuilder()
    .setTitle('Nest管理端文档')
    .setDescription('简介') // 文档介绍
    .setVersion('1.0.0') // 文档版本
    .addTag(exports.tag.core) // 每个tag标签都可以对应着几个@ApiUseTags('用户,安全') 然后被ApiUseTags注释，字符串一致的都会变成同一个标签下的
    // .setBasePath('http://localhost:5000')
    .build();
// 为了创建完整的文档（具有定义的HTTP路由），我们使用类的createDocument()方法SwaggerModule。此方法带有两个参数，分别是应用程序实例和基本Swagger选项。
// 最后一步是setup()。它依次接受（1）装入Swagger的路径，（2）应用程序实例, （3）描述Nest应用程序的文档。
// mysql conf
exports.mysqlconf = {
    type: 'mysql',
    host: '127.0.0.1',
    port: 3308,
    username: 'root',
    password: 'rootroot',
    database: 'flina',
    entities: [__dirname + '/**/entity/*.entity{.ts,.js}'],
    // 生产环境下禁用，不允许修改数据库表结构
    // 测试环境下开启，可以方便的常见表和字段
    synchronize: true,
    // namingStrategy: new SnakeNamingStrategy(),
    timezone: "+08:00",
    charset: "UTF8_GENERAL_CI"
};
exports.emailconf = {
    transport: {
        host: 'smtp.qq.com',
        port: 25,
        ignoreTLS: true,
        secure: false,
        auth: {
            user: '1745509482@qq.com',
            pass: 'wqnigsxazgffbaig'
        }
    },
    defaults: {
        from: 'dongqinglin 1745509482'
    },
    preview: false,
    template: {
        dir: process.cwd() + "/src/inside/conf",
        adapter: new ejs_adapter_1.EjsAdapter(),
        options: {
            strict: true
        }
    }
};
