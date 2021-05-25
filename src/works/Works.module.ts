import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Works } from "./Works.entity";
import { WorksService } from "./Works.service";
import { WorksController } from "./Works.contoller";


@Module({
    imports: [TypeOrmModule.forFeature([Works])],
    controllers: [WorksController],
    providers: [WorksService]
})
export class WorksModule {}