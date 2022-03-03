import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { TasksModule } from './tasks-mongo/tasks.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksPostgresModule } from './tasks-postgres/tasks-postgres.module';
import { TaskEntity } from './tasks-postgres/task.entity';
import { AppService } from './app.service';
// import psql from './config/connection';
@Module({
  imports: [
    TasksModule,
    ConfigModule.forRoot({ isGlobal: true }),
    MongooseModule.forRoot(process.env.MONGO_LOCAL),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(<string>process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
      entities: [TaskEntity],
    }),
    TasksPostgresModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
