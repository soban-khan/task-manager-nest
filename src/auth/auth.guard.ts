import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()

/*
now control comes here form useGuard in controller
this class will ask to use AuthGuard
which uses local strategy
this will trigger our local strategy which is auth.strategy.ts in our case
*/
export class Guard extends AuthGuard('local') {}
