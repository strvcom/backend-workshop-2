import React from 'react'
import Message from './Message.jsx' 	// eslint-disable-line no-unused-vars

class MessageList extends React.Component {

	constructor(props) {
		super(props)
	}

	render() {
		return (
			<div id="messageList" className="message-list-container">
				<ul className="message-list">
					{this.props.messages.map(message =>
						<Message key={message.id} model={message} />
					)}
				</ul>
			</div>
		)
	}
}

export default MessageList
