import React from 'react'

class AddMessageForm extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			text: ''
		}
	}

	componentDidMount() {
		this.refs.message.focus()
	}

	handleClick() {
		const text = this.state.text

		if (! text)
			return

		this.props.onSubmit(text)
		this.setState({ text: '' })
	}

	handleChange(event) {
		this.setState({ text: event.target.value })
	}

	handleKeyPress(event) {
		if (event.which === 13)
			return this.handleClick()
	}

	render() {
		return (
			<div>
				<input
					ref="message"
					type="text"
					value={this.state.text}
					onChange={event => this.handleChange(event)}
					onKeyPress={event => this.handleKeyPress(event)}
				/>
				<button onClick={() => this.handleClick()}>Send</button>
			</div>
		)
	}
}

export default AddMessageForm
