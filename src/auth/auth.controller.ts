import {
  Body,
  Controller,
  Get,
  Post,
  Request,
  UseGuards,
} from '@nestjs/common';
import { Guard } from './auth.guard';
// import { RegisterService } from 'src/register/register.service';
import { AuthInterface } from './auth.interface';
import { AuthService } from './auth.service';
import { AuthenticatedGuard } from './authenticated.guard';
import { JwtGuard } from './jwt.guard';

@Controller('login')
export class AuthController {
  constructor(private authService: AuthService) {}

  // @Post()
  // verifyUser(@Body() user: AuthInterface): Promise<AuthInterface | String> {
  //   return this.authService.verify(user);
  // }

  /* Post request of login will land here on useguards before anything
  this will invoke the class passed to it
  which in this case is Guard
  so now control of program goes to guard class
  we don't yet have anything in req.user
  
  when our program comes back after using use guards 
  user is attached to req object and can be accessed from there
  after setting up session we also return a cookie from login function 
  */

  @UseGuards(Guard)
  @Post()
  login(@Request() req): Promise<string> {
    // console.log(req.user);
    // const { password, ...rest } = req.user;
    // return rest;
    return this.authService.login(req.user);
  }

  // @UseGuards(AuthenticatedGuard) //this is to check if login is in session and allow access, used with session storage
  @UseGuards(JwtGuard)
  @Get()
  test(@Request() req): string {
    return req.user;
  }
}
