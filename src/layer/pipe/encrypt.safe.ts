import * as crypto from 'crypto';
import { IPipe } from 'src/interface/IPipe';

import { BadRequestException } from '@nestjs/common';

export class EncryptSafePipe implements IPipe {
  private readonly passwordException = '密码不能为空';
  private readonly base64 = 'base64';
  private readonly sha1 = 'sha1';
  private readonly iterateCount = 1000;
  private readonly length = 16;

  service(param: string) {
    // encrypt function 1
    return this.hashPassword(param)
    // encrypt function 2
    // const salt = makeSalt()
    // must restore salt;
    // const pass = encryptPassword('pass', salt)
    // return pass;
  }

  public makeSalt(): string {
    return crypto.randomBytes(3).toString(this.base64);
  }

  public encryptPassword(password: string, salt: string): string {
    if (!password || !salt) {
      throw new BadRequestException(this.passwordException);
    }
    const tempSalt = Buffer.from(salt, this.base64);

    return (
      crypto.pbkdf2Sync(password, tempSalt, this.iterateCount, this.length, this.sha1).toString(this.base64)
    );
  }

  private hashPassword(password: string): string {
    if (!password) {
      throw new BadRequestException(this.passwordException);
    }
    return this.getHashCode(password).toString();
  }


  private getHashCode(str: string) {
    let hashcode = 0
    for (let i = 0; i < str.length; i++) {
      //溢出需要每次运算后立即处理，否则可能超过js数值的表示范围。
      hashcode = hashcode * 31 + str.charCodeAt(i)
      hashcode &= 0xffffffff
    }
    return hashcode;
  }

}
