import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegisterEntity } from 'src/register/register.entity';
import { PassportModule } from '@nestjs/passport';
import { AuthStrategy } from './auth.strategy';
import { SessionSerializer } from './session.serializer';
// import { RegisterModule } from 'src/register/register.module';
@Module({
  imports: [
    TypeOrmModule.forFeature([RegisterEntity]),
    PassportModule.register({ session: true }),
  ],
  providers: [AuthService, AuthStrategy, SessionSerializer],
  controllers: [AuthController],
})
export class AuthModule {}
