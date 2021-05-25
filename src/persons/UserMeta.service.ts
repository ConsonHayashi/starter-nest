import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserMeta } from './UserMeta.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserMetaService {
  constructor(
    @InjectRepository(UserMeta)
    private readonly userRepo: Repository<UserMeta>,
  ) { }
  async findAll(): Promise<UserMeta[]> {
    return await this.userRepo.query('select * from user_meta');
  }
}
