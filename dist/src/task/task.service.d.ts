import { Task } from '../task/task.entity';
import { Repository, DataSource } from 'typeorm';
import { TaskDto } from 'dto/task.dto';
import { CreateTaskDto } from 'dto/createTask.dto';
export declare class TaskService {
    private taskRepository;
    private dataSource;
    constructor(taskRepository: Repository<Task>, dataSource: DataSource);
    addTask(createtaskDto: CreateTaskDto): Promise<TaskDto>;
    allTask(): Promise<Task[]>;
    removeTask(id: string): void;
}
