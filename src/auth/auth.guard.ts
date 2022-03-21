import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()

/*
now control comes here form useGuard in controller
this class will ask to use AuthGuard
which uses local strategy
this will trigger our local strategy which is auth.strategy.ts in our case
*/
export class Guard extends AuthGuard('local') {
  /*
to create a session 
we need to tell the login module to create a login via creating a session
that is why can activate
*/
  //   async canActivate(context: ExecutionContext): Promise<boolean> {
  //     const result = (await super.canActivate(context)) as boolean;
  //     const request = context.switchToHttp().getRequest();
  //     await super.logIn(request); //this is the gotcha, if we need a session we always need to trigger this login method
  //     return result;
  //   }
}
