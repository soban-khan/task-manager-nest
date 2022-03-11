import { Body, Controller, Post } from '@nestjs/common';
import { RegisterService } from './register.service';
import { RegisterEntity } from './register.entity';
import { RegisterInterface } from './register.interface';

@Controller('register')
export class RegisterController {
  constructor(private registerService: RegisterService) {}

  @Post()
  registerUser(@Body() user: RegisterInterface): Promise<RegisterEntity> {
    return this.registerService.register(user);
  }
}
