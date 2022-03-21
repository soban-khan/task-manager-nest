import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.setGlobalPrefix('something');

  //============this is used when we want session storage==========
  // app.use(
  //   session({
  //     secret: 'keyboard cat', //should be env variable
  //     resave: false,
  //     saveUninitialized: true,
  //     cookie: { maxAge: 4500000 },
  //   }),
  // );
  // app.use(passport.initialize());
  // app.use(passport.session());
  //==================================================================
  await app.listen(3000);
}
bootstrap();
