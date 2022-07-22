import React, {Component} from 'react'

class Form extends Component
{
	initialState = {
		task_name: '',
		task_description: '',
	}

	state = this.initialState

	render() {
		const { task_name, task_description } = this.state;

		return (
		  <form>
			<label htmlFor="task_name">Name</label>
			<input
			  type="text"
			  name="task_name"
			  id="task_name"
			  value={task_name}
			  onChange={this.handleChange} />
			<p/>
			<label htmlFor="task_description">Description</label>
			<input
			  type="text"
			  name="task_description"
			  id="task_description"
			  value={task_description}
			  onChange={this.handleChange} />
			<p/>
			<input className='button-input'type="button"value="Add new Task" onClick={() => { this.submitForm(); this.props.closeBackdrop();}} />
		  </form>
		);
	}

	submitForm = () => {
		this.props.AddNewTask(this.state);
		this.setState(this.initialState)
	}

	handleChange = (event) => {
		const {name, value} = event.target

		this.setState({
			[name]: value,
		})
	}
}

export default Form