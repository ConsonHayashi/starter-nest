import { Controller, Get } from "@nestjs/common";
import { WorksService } from "./Works.service";
import { Works } from "./Works.entity";

@Controller('works')
export class WorksController {
    constructor(private readonly worksService: WorksService) { }
    @Get('list')
    findAll(): Promise<Works[]> {
      return this.worksService.findAll();
    }
}
