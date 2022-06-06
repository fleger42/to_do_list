import { TaskService } from './task.service';
import { CreateTaskDto } from '../../dto/createTask.dto';
import { TaskDto } from '../../dto/task.dto';
export declare class TaskController {
    private readonly taskservice;
    constructor(taskservice: TaskService);
    GetTodolist(): Promise<import("./task.entity").Task[]>;
    AddTask(createtaskDto: CreateTaskDto): Promise<TaskDto>;
    RemoveTask(id: string): string;
}
