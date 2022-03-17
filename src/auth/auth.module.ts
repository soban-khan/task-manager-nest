import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegisterEntity } from 'src/register/register.entity';
// import { RegisterModule } from 'src/register/register.module';
@Module({
  imports: [TypeOrmModule.forFeature([RegisterEntity])],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
