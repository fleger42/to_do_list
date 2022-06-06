import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Task } from '../task/task.entity';
import { TaskController } from './task.controller';
import { TaskService } from './task.service';

@Module({
	imports: [TypeOrmModule.forFeature([Task])],
	providers: [TaskService],
	controllers: [TaskController],
})

export class TaskModule{}