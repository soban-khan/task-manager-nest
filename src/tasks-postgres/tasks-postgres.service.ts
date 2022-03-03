import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, Repository, UpdateResult } from 'typeorm';
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

  updateTask(id: string, task: TaskInterface): Promise<UpdateResult> {
    return this.TaskRepository.update(id, task);
  }

  deleteTask(id: string): Promise<DeleteResult> {
    return this.TaskRepository.delete(id);
  }
}
