import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { TaskModule } from './task/task.module';
import { Task }  from './task/task.entity';
import { DataSource } from 'typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot(
      {
          type: 'postgres',
          host: 'localhost',
          port: 5432,
          username: 'postgres',
          password: '123456',
          database: 'task_managment',
          entities: [Task],
          synchronize: true,
          autoLoadEntities: true,
      }),
    TaskModule,
    ],
})

export class AppModule {
    constructor(private dataSource: DataSource) {}
}
