import { Body, Controller, Post } from '@nestjs/common';
// import { RegisterService } from 'src/register/register.service';
import { AuthInterface } from './auth.interface';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  verifyUser(@Body() user: AuthInterface): Promise<AuthInterface | String> {
    return this.authService.verify(user);
  }
}
