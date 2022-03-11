import { Body, Controller, Post } from '@nestjs/common';
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
