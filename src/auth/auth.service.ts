import { Injectable } from '@nestjs/common';
import { AuthInterface } from './auth.interface';
import * as bcrypt from 'bcrypt';
import { RegisterEntity } from 'src/register/register.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { RegisterInterface } from 'src/register/register.interface';
@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
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

  /*
  Here we create a new JWT
  this login method converts the user object to payload of our requirement
  and convert that to JWT
  */
  async login(user: RegisterInterface): Promise<string> {
    const payload = { username: user.username, sub: user.id };
    const accessToken = this.jwtService.sign(payload);
    return accessToken;
  }
}
