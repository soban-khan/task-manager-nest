import { Injectable } from '@nestjs/common';
import { AuthInterface } from './auth.interface';
import * as bcrypt from 'bcrypt';
import { RegisterEntity } from 'src/register/register.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(RegisterEntity)
    private authRepository: Repository<RegisterEntity>,
  ) {}

  async verify(user: AuthInterface): Promise<AuthInterface | string> {
    const data = await this.authRepository.find();
    const temp = data.find((cur) => cur.username === user.username);
    // console.log(temp);
    if (temp) {
      const password = user.password;
      const hash = temp.password;
      const isMatch = await bcrypt.compare(password, hash);
      // if (isMatch) return 'Access granted';
      if (isMatch) return temp;
      else return 'Wrong Password';
      // else return null;
    } else {
      return "user doesn't exist";
      // return null;
    }
  }
}
