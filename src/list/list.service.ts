import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { List } from '../list/list.entity';
import { Repository, DataSource } from 'typeorm'
import { Task } from '../../interfaces/task.interface';

@Injectable()
export class ListService
{
	constructor(
		@InjectRepository(List)
		private listRepository: Repository<List>,
		private dataSource: DataSource,
	) {}

	addTask(list: List)
	{
		this.listRepository.save(list);
	}

	allTask()
	{
		return (this.listRepository.find());
	}

	removeTask(id: string)
	{
		this.listRepository.delete(id);
	}
}
