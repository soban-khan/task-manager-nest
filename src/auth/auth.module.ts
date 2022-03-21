import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegisterEntity } from 'src/register/register.entity';
import { PassportModule } from '@nestjs/passport';
import { AuthStrategy } from './auth.strategy';
import { SessionSerializer } from './session.serializer';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
// import { RegisterModule } from 'src/register/register.module';
@Module({
  imports: [
    TypeOrmModule.forFeature([RegisterEntity]),
    // PassportModule.register({ session: true }), //we use this when we want to set up storage session, for JWT we don't need session key
    PassportModule,
    JwtModule.register({
      secret: 'this is my secret', //ideally should be env variable
      signOptions: { expiresIn: '600s' },
    }),
  ],
  providers: [AuthService, AuthStrategy, SessionSerializer, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
