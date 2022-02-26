import { Injectable } from '@nestjs/common';
import { Tasks } from 'src/interfaces/tasks.interfaces';
@Injectable()
export class TasksService {
  private readonly tasks: Tasks[] = [
    {
      name: 'soban',
      id: '1',
    },
    { name: 'khan', completed: false, id: '2' },
  ];

  allTasks(): Tasks[] {
    return this.tasks;
  }

  specificTask(id: string): object {
    // console.log(this.tasks[0]);
    const temp: Tasks = this.tasks.find((cur) => cur.id === id);
    if (temp) return temp;
    else return { msg: 'no such id:' + id };
    // return 'specific test';
  }
}
