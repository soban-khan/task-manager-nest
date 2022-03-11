import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RegisterEntity } from './register.entity';
import { RegisterInterface } from './register.interface';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
@Injectable()
export class RegisterService {
  constructor(
    @InjectRepository(RegisterEntity)
    private registerRepository: Repository<RegisterEntity>,
  ) {}

  async register(user: RegisterInterface): Promise<RegisterEntity> {
    const saltOrRounds = 10;
    const password = user.password;
    const hash = await bcrypt.hash(password, saltOrRounds);
    user.password = hash;
    return this.registerRepository.save(user);
    // console.log(user);
    // return 'register';
  }
}
