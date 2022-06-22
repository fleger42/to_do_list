import './index.css';
import Todo from './Todo.js'
import { Component } from 'react';

class App extends Component {
	state = {
		all_task: [
      	{
				task_name: 'Poop',
				task_status: 'Ongoing',
        task_description: 'There is something inside me',
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

	AddTask = (task) => {
	this.setState({all_task: [...this.state.all_task, task]})
 	}
  
	editTask = (index) => {
			const {all_task} = this.state
			all_task[index] = {
				task_name: 'EDITED',
				task_status: 'EDITED',
		task_description: 'EDITED',
			}
			this.setState({
				all_task: all_task
			})
	}

	render() {  
		const {all_task} = this.state
		return (
		<div>
			<h1>My todos</h1>
			<Todo task_data={all_task} removeFunction={this.removeTask} editFunction={this.editTask}/>
		</div>
		)
	}
	}

export default App;
