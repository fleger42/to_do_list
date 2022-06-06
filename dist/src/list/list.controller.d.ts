import { ListService } from './list.service';
import { TaskDto } from '../../dto/task.dto';
export declare class ListController {
    private readonly listservice;
    constructor(listservice: ListService);
    GetTodolist(): Promise<import("./list.entity").List[]>;
    AddTask(taskDto: TaskDto): string;
    RemoveTask(id: string): string;
}
