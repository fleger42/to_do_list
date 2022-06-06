import { List } from './list.interface';

export interface User
{
	username: string;
	email: string;
	password: string;
	user_list: List[];
}