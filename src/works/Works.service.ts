import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Works } from "./Works.entity";

@Injectable()
export class WorksService {
    constructor(
        @InjectRepository(Works)
        private readonly worksRepo: Repository<Works>
    ){}
    async findAll(): Promise<Works[]> {
        return await this.worksRepo.query('select * from works');
      }
}