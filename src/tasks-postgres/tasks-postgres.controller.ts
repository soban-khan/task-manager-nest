import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { TasksPostgresService } from './tasks-postgres.service';
import { TaskInterface } from './task.interface';
import { TaskEntity } from './task.entity';
import { Observable, from } from 'rxjs';
import { DeleteResult, UpdateResult } from 'typeorm';
import { AuthenticatedGuard } from 'src/auth/authenticated.guard';

@Controller('tasks-postgres')
export class TasksPostgresController {
  constructor(private readonly tasksPostgresService: TasksPostgresService) {}

  @UseGuards(AuthenticatedGuard)
  @Get()
  getTasks(): Observable<TaskEntity[]> {
    return from(this.tasksPostgresService.getTasks());
  }

  @Post()
  createTask(@Body() task: TaskInterface): Promise<TaskEntity> {
    return this.tasksPostgresService.createTask(task);
  }

  @Get(':id')
  specificTask(@Param('id') id: string): Promise<TaskEntity> {
    return this.tasksPostgresService.specificTask(id);
  }

  @Patch(':id')
  updateTask(
    @Param('id') id: string,
    @Body() task: TaskInterface,
  ): Promise<UpdateResult> {
    return this.tasksPostgresService.updateTask(id, task);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string): Promise<DeleteResult> {
    return this.tasksPostgresService.deleteTask(id);
  }
}
