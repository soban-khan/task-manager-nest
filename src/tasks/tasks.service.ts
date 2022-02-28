import { Injectable } from '@nestjs/common';
import { Tasks } from 'src/interfaces/tasks.interfaces';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
@Injectable()
export class TasksService {
  constructor(@InjectModel('task') private readonly taskModel: Model<Tasks>) {}

  async allTasks(): Promise<Tasks[]> {
    return await this.taskModel.find();
  }

  async specificTask(id: string): Promise<Tasks> {
    // console.log(this.tasks[0]);
    // const temp: Tasks = this.tasks.find((cur) => cur.id === id);
    // if (temp) return temp;
    // else return { msg: 'no such id:' + id };
    // return 'specific test';
    return await this.taskModel.findById(id);
  }

  async createTask(task: Tasks): Promise<Tasks> {
    // return task;
    const newTask = new this.taskModel(task);
    return await newTask.save();
  }

  async deleteTask(id: string): Promise<Tasks> {
    // return 'deleted' + id;
    return await this.taskModel.findByIdAndRemove(id);
  }

  async updateTask(id: string, task: Tasks): Promise<Tasks> {
    return await this.taskModel.findByIdAndUpdate(id, task, { new: true });
  }
}
