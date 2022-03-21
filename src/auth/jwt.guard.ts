import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/*
this will invoke the jwt strategy defined
in this case it is jwt.strategy.ts
*/
@Injectable()
export class JwtGuard extends AuthGuard('jwt') {}
