import React from 'react'
import moment from 'moment'

class Message extends React.Component {

	render() {
		return (
			<li className="message">
				<div className="message__user">{this.props.model.user}</div>
				<div className="message__date">{moment(this.props.model.date).fromNow()}</div>
				<div className="message__text">{this.props.model.text}</div>
			</li>
		)
	}
}

export default Message
