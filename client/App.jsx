// React stuff
import React from 'react'
import ReactDOM from 'react-dom'
import '../styles/styles.styl'

import LoginForm from './LoginForm.jsx' 	// eslint-disable-line no-unused-vars
import Chat from './Chat.jsx' 	// eslint-disable-line no-unused-vars

export class App extends React.Component {

	constructor(props) {
		super(props)
		this.state = {
			view: 'login',
			user: ''

		}
	}

	handleLoginSubmit(user) {
		this.setState({
			user: user,
			view: 'chat'
		})
	}

	render() {
		const view = this.state.view === 'login'
			? <LoginForm onSubmit={user => this.handleLoginSubmit(user)} />
			: <Chat user={this.state.user} />

		return (
			<div className="page">
				<h1>Sample chat app</h1>
				{view}
			</div>
		)
	}
}

ReactDOM.render(<App />, document.getElementById('chat'))
