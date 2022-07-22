import { List } from '../list/list.entity';
import { Repository, DataSource } from 'typeorm';
export declare class ListService {
    private listRepository;
    private dataSource;
    constructor(listRepository: Repository<List>, dataSource: DataSource);
    addTask(list: List): void;
    allTask(): Promise<List[]>;
    removeTask(id: string): void;
}
