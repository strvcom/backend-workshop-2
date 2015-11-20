import React from 'react'
import MessageList from './MessageList.jsx'         // eslint-disable-line no-unused-vars
import AddMessageForm from './AddMessageForm.jsx'   // eslint-disable-line no-unused-vars


export default class Chat extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      messages: []
    }
  }

  componentDidMount() {
    // Insert updating magic here
    this.socket = io()

    this.socket.on('message', message => {
      this.addMessage(message)
    })
  }

  addMessage(message) {

    // Update the data
    this.state.messages.push(message)
    this.setState(this.state)

    // Scroll down the view
    setTimeout(() => {
      const scrollArea = document.getElementById('messageList')

      scrollArea.scrollTop = scrollArea.scrollHeight
    }, 0)
  }

  submitMessage(text) {
    const message = {
      text,
      user: this.props.user,
      date: new Date().toISOString()
    }

    this.socket.emit('message', message)

  }

  render() {
    return (
      <div>
        <MessageList messages={this.state.messages} />
        <AddMessageForm onSubmit={text => this.submitMessage(text)} />
      </div>
    )
  }
}
