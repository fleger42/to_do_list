import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { ListModule } from './list/list.module';
import { List }  from './list/list.entity';
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
          entities: [List],
          synchronize: true,
          autoLoadEntities: true,
      }),
    ListModule,
    ],
})

export class AppModule {
    constructor(private dataSource: DataSource) {}
}
