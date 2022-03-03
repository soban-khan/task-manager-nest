import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Patch,
} from '@nestjs/common';
import { createTask } from 'src/tasks-mongo/dto/create-task.dto';
import { Tasks } from 'src/tasks-mongo/interfaces/tasks.interfaces';
import { TasksService } from './tasks.service';
@Controller('api/v1/tasks/')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  allTasks(): Promise<Tasks[]> {
    return this.tasksService.allTasks();
  }

  @Get(':id')
  specificTask(@Param('id') id): Promise<Tasks> {
    return this.tasksService.specificTask(id);
  }

  @Post()
  createTask(@Body() task: Tasks): Promise<Tasks> {
    // console.log(req.url);
    return this.tasksService.createTask(task);
    // return `creating ${Object.keys(task)}`;
  }

  @Delete(':id')
  deleteTask(@Param('id') id): Promise<Tasks> {
    return this.tasksService.deleteTask(id);
  }

  @Patch(':id')
  updateSpecificTask(
    @Param('id') id,
    @Body() taskToBeUpdated: createTask,
  ): Promise<Tasks> {
    return this.tasksService.updateTask(id, taskToBeUpdated);
  }
}
