import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AuthEntity } from './auth.entity';
import { AuthInterface } from './auth.interface';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(AuthEntity)
    private authRepository: Repository<AuthEntity>,
  ) {}

  async register(user: AuthInterface): Promise<AuthEntity> {
    const saltOrRounds = 10;
    const password = user.pass;
    const hash = await bcrypt.hash(password, saltOrRounds);
    user.pass = hash;
    return this.authRepository.save(user);
    // console.log(user);
    // return 'register';
  }

  login(): any {
    return 'login';
  }
}
