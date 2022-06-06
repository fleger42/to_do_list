import { Entity, Column, PrimaryGeneratedColumn} from 'typeorm'

@Entity()
export class Task
{
	@PrimaryGeneratedColumn()
	task_id: number;

	@Column({nullable: true, length: 64})
	task_name: string;

	@Column({default: false})
	task_status: boolean;

	@Column({nullable: true, length: 300})
	task_description: string;
}