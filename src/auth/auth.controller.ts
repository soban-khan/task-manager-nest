import { Body, Controller, Post, Put } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthEntity } from './auth.entity';
import { AuthInterface } from './auth.interface';
@Controller('auth')
export class AuthController {
  constructor(private authservice: AuthService) {}

  @Post('register')
  registerUser(@Body() user: AuthInterface): Promise<AuthEntity> {
    return this.authservice.register(user);
  }

  @Post('login')
  loginUser(): any {
    return this.authservice.login();
  }
}
