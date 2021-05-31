import { DocumentBuilder } from "@nestjs/swagger";

export const port = 3000;
export const tag = {
  core: "核心"
}
export const swaggerDocumentOption = new DocumentBuilder()
  .setTitle('Nest管理端文档')
  .setDescription('简介') // 文档介绍
  .setVersion('1.0.0') // 文档版本
  .addTag(tag.core) // 每个tag标签都可以对应着几个@ApiUseTags('用户,安全') 然后被ApiUseTags注释，字符串一致的都会变成同一个标签下的
  // .setBasePath('http://localhost:5000')
  .build();
// 为了创建完整的文档（具有定义的HTTP路由），我们使用类的createDocument()方法SwaggerModule。此方法带有两个参数，分别是应用程序实例和基本Swagger选项。
// 最后一步是setup()。它依次接受（1）装入Swagger的路径，（2）应用程序实例, （3）描述Nest应用程序的文档。

