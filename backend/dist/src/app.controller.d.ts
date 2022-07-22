import { ListService } from './list/list.service';
import { Task } from '../interfaces/task.interface';
import { TaskDto } from '../dto/task.dto';
export declare class AppController {
    private readonly listservice;
    constructor(listservice: ListService);
    GetTodolist(): Task[];
    AddTask(taskDto: TaskDto): string;
    RemoveTask(taskDto: TaskDto): string;
}
