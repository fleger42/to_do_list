import { Task } from '../task/task.entity';
import { Repository } from 'typeorm';
import { TaskDto } from 'dto/task.dto';
import { CreateTaskDto } from 'dto/createTask.dto';
export declare class TaskService {
    private taskRepository;
    constructor(taskRepository: Repository<Task>);
    addTask(createtaskDto: CreateTaskDto): Promise<TaskDto>;
    allTask(): Promise<Task[]>;
    removeTask(id: string): void;
}
