import { Controller, Get, Post, Body, Delete, Param} from '@nestjs/common';
import { TaskService } from './task.service';
import { CreateTaskDto } from '../../dto/createTask.dto';
import { TaskDto } from '../../dto/task.dto';

@Controller()
export class TaskController {
  constructor(private readonly taskservice: TaskService) {}

  @Get()
  GetTodolist() 
  {
    return this.taskservice.allTask();
  }

  @Post()
  AddTask(@Body() createtaskDto: CreateTaskDto) 
  {
    const taskDto = this.taskservice.addTask(createtaskDto);
    return (taskDto);
  }

  @Delete(':id')
  RemoveTask(@Param('id') id: string)
  {
    this.taskservice.removeTask(id);
    return ('Task removed successfully');
  } 
}
