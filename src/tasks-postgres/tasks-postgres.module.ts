import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TasksPostgresController } from './tasks-postgres.controller';
import { TasksPostgresService } from './tasks-postgres.service';
import { TaskEntity } from './task.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TaskEntity])],
  controllers: [TasksPostgresController],
  providers: [TasksPostgresService],
})
export class TasksPostgresModule {}
