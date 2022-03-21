import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

/*
Now this will check for token and all other options we defined
and automatically calls validate method

which saves the passed payload to req.user
and then we go back to route
*/
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'this is my secret',
    });
  }

  async validate(payload: any) {
    // console.log(payload);
    return {
      id: payload.sub,
      username: payload.username,
    };
  }
}
