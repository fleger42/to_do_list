import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { List } from '../list/list.entity';
import { ListController } from './list.controller';
import { ListService } from './list.service';

@Module({
	imports: [TypeOrmModule.forFeature([List])],
	providers: [ListService],
	controllers: [ListController],
})

export class ListModule{}