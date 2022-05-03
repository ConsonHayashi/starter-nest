import { Dictionary } from 'src/interface/entity/dictionary.entity';

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DictionaryController } from '../layer/http/dictionary.controller';
import { DictionaryService } from '../layer/service/dictionary.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Dictionary])
  ],
  controllers: [DictionaryController],

  providers: [
    DictionaryService
  ]
})
export class DictionaryModule { }

