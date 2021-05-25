import { Module } from '@nestjs/common';
import { UserMetaController } from './UserMeta.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserMeta } from './UserMeta.entity';
import { UserMetaService } from './UserMeta.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserMeta])],
  controllers: [UserMetaController],
  providers: [UserMetaService],
})
export class UserModule {}
