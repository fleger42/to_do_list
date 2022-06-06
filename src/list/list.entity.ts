import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class List
{
	@PrimaryGeneratedColumn()
	task_id: number;

	@Column()
	task_name: string;

	@Column({default: false})
	task_status: boolean;
}