import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Task } from '../task/task.entity';
import { Repository, DataSource } from 'typeorm'
import { TaskInterface } from '../../interfaces/task.interface';
import { TaskDto } from 'dto/task.dto';
import { CreateTaskDto } from 'dto/createTask.dto';

@Injectable()
export class TaskService
{
	constructor(
		@InjectRepository(Task)
		private taskRepository: Repository<Task>,
		private dataSource: DataSource,
	) {}

	async addTask(createtaskDto: CreateTaskDto)
	{
		const task: Task = new Task();
		task.task_name = createtaskDto.task_name;
		task.task_description = createtaskDto.task_description;
		task.task_status = false;

		await this.taskRepository.save(task);

		const taskDto: TaskDto = new TaskDto();
		taskDto.task_id = task.task_id;
		taskDto.task_description = task.task_description;
		taskDto.task_name = task.task_name;
		taskDto.task_status = task.task_status;

		return (taskDto);
	}

	allTask()
	{
		return (this.taskRepository.find());
	}

	removeTask(id: string)
	{
		this.taskRepository.delete(id);
	}
}
