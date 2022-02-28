import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { MongooseModule } from '@nestjs/mongoose';
import { tasksSchema } from './schemas/tasks.schemas';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'task', schema: tasksSchema }])],
  controllers: [TasksController],
  providers: [TasksService],
})
export class TasksModule {}
