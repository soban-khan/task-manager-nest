import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthInterface } from './auth.interface';
import { AuthService } from './auth.service';

@Injectable()
/*
Now control comes here behind the scenes
this will invoke validate function and hence verify
and add user to request object
*/
export class AuthStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super();
  }

  async validate(
    username: string,
    password: string,
  ): Promise<AuthInterface | string> {
    const arg = { username: username, password: password };
    const user = await this.authService.verify(arg);
    // console.log(user);
    if (!user) throw new UnauthorizedException();
    return user;
  }
}
