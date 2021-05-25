import { Controller, Get } from '@nestjs/common';
import { UserMeta } from './UserMeta.entity';
import { UserMetaService } from './UserMeta.service';

@Controller('user')
export class UserMetaController {
  constructor(private readonly userService: UserMetaService) { }
  @Get('list')
  findAll(): Promise<UserMeta[]> {
    return this.userService.findAll().then((userMetaList) => {
      return userMetaList;
    });
  }
}
