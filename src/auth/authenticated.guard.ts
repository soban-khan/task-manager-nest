import { CanActivate, Injectable, ExecutionContext } from '@nestjs/common';

/*
Guards are in between the incoming request and actual handling of request
so it is able to intercept the request and apply some logic to it
*/
@Injectable()
export class AuthenticatedGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    // console.log(request.isAuthenticated());

    /* Assuming we have set up a session
    is Authenticated comes directly from passport and returns boolean
    this will look for a session and return accordingly
    it will check if we have cookie with that session id
    and all other checks if we have cookie in our session etc....
    if there is a session this will return true
    */
    return request.isAuthenticated();
  }
}
