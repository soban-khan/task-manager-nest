import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Delete,
  Patch,
} from '@nestjs/common';
import { createTask } from 'src/dto/create-task.dto';
import { Tasks } from 'src/interfaces/tasks.interfaces';
import { TasksService } from './tasks.service';
@Controller('api/v1/tasks/')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  allTasks(): Tasks[] {
    return this.tasksService.allTasks();
  }

  @Get(':id')
  specificTask(@Param('id') id): object {
    return this.tasksService.specificTask(id);
  }

  @Post()
  createTask(@Body() { name, completed }: createTask): string {
    // console.log(req.url);
    return `creating ${name}, ${completed}`;
  }

  @Delete(':id')
  deleteTask(@Param('id') id) {
    return 'delete specific task ' + id;
  }

  @Patch(':id')
  updateSpecificTask(@Param('id') id, @Body() taskToBeUpdated: createTask) {
    return 'updating ' + id + 'task ' + taskToBeUpdated.name;
  }
}
