import { Controller, Get, Post, Body, Delete, Param} from '@nestjs/common';
import { ListService } from './list.service';
import { TaskDto } from '../../dto/task.dto';

@Controller()
export class ListController {
  constructor(private readonly listservice: ListService) {}

  @Get()
  GetTodolist() 
  {
    return this.listservice.allTask();
  }

  @Post()
  AddTask(@Body() taskDto: TaskDto) 
  {
    this.listservice.addTask(taskDto);
    return ('Task added successfully');
  }

  @Delete(':id')
  RemoveTask(@Param('id') id: string)
  {
    this.listservice.removeTask(id);
    return ('Task removed successfully');
  } 
}
