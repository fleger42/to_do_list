import './index.css';
import Todo from './Todo.js'
import { Component } from 'react';
import AddTask from './AddTask.js'

class App extends Component {
	state = {
		all_task: [
			{
				task_name: 'Create a task',
				task_status: '',
        		task_description: 'Use the form at the bottom',
			},
		]
	}

	removeTask = (index) => {
		const {all_task} = this.state
		this.setState({
			all_task: all_task.filter((task, i) => {
				return i !== index
			}),
		})
	}

	AddNewTask = (task) => {
	this.setState({all_task: [...this.state.all_task, task]})
 	}
  
	editTask = (index) => {
			const {all_task} = this.state
			let new_status = all_task[index].task_status
			if(new_status === 'done')
				new_status = ''
			else
				new_status = 'done'
			all_task[index] = {
				task_name: all_task[index].task_name,
				task_status: new_status,
				task_description: all_task[index].task_description,
			}
			this.setState({
				all_task: all_task
			})
	}

	render() {  
		const {all_task} = this.state
		return (
		<div>
			<Todo task_data={all_task} removeFunction={this.removeTask} editFunction={this.editTask}/>
			<AddTask AddNewTask={this.AddNewTask}/>
		</div>
		)
	}
	}

export default App;
