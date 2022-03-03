import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { TasksPostgresService } from './tasks-postgres.service';
import { TaskInterface } from './task.interface';
import { TaskEntity } from './task.entity';
import { Observable, from } from 'rxjs';

@Controller('tasks-postgres')
export class TasksPostgresController {
  constructor(private readonly tasksPostgresService: TasksPostgresService) {}

  @Get()
  getTasks(): Observable<TaskEntity[]> {
    return from(this.tasksPostgresService.getTasks());
  }

  @Post()
  createTask(@Body() task: TaskInterface): Promise<TaskEntity> {
    return this.tasksPostgresService.createTask(task);
  }

  @Get(':id')
  specificTask(@Param('id') id): Promise<TaskEntity> {
    return this.tasksPostgresService.specificTask(id);
  }
}
