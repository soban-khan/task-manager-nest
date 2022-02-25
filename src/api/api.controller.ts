import { Controller, Get, Param } from '@nestjs/common';

@Controller('api/v1/tasks/')
export class ApiController {
  @Get()
  allTasks(): string {
    return 'all tasks';
  }

  @Get(':id')
  specificTask(@Param('id') id): string {
    return `specific task ${id}`;
  }
}
