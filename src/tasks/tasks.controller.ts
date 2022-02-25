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
@Controller('api/v1/tasks/')
export class TasksController {
  @Get()
  allTasks(): string {
    return 'all tasks';
  }

  @Get(':id')
  specificTask(@Param('id') id): string {
    return `specific task ${id}`;
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
