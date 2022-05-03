import {
  Test,
  TestingModule,
} from '@nestjs/testing';

import { FileController } from './index.controller';

describe("IndexController", () => {
  let controller: FileController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FileController],
    }).compile();

    controller = module.get<FileController>(FileController);
  });

  it("should be defined", () => {
    expect(controller).toBeDefined();
  });
});
