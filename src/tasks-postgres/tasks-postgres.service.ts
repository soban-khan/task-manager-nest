import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TaskEntity } from './task.entity';
import { TaskInterface } from './task.interface';
import { from, Observable } from 'rxjs';

@Injectable()
export class TasksPostgresService {
  constructor(
    @InjectRepository(TaskEntity)
    private TaskRepository: Repository<TaskEntity>,
  ) {}

  getTasks(): Observable<TaskEntity[]> {
    return from(this.TaskRepository.find());
  }

  createTask(task: TaskInterface): Promise<TaskEntity> {
    return this.TaskRepository.save(task);
  }

  specificTask(id: string): Promise<TaskEntity> {
    return this.TaskRepository.findOne(id);
  }
}
