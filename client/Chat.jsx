import React from 'react'
import MessageList from './MessageList.jsx'         // eslint-disable-line no-unused-vars
import AddMessageForm from './AddMessageForm.jsx'   // eslint-disable-line no-unused-vars

import Firebase from 'firebase'

export default class Chat extends React.Component {

  constructor(props) {
    super(props)

    this.fb = new Firebase('backend-meetup.firebaseio.com')
    this.state = {
      messages: []
    }
  }

  componentDidMount() {
    const messages = this.fb.child('/messages')

    messages.on('child_added', snapshot => {
      const rawData = snapshot.val()
      const message = {
        id: snapshot.key(),
        text: rawData.text,
        user: rawData.user,
        date: new Date(rawData.date)
      }

      this.addMessage(message)
    })

    messages.on('child_removed', snapshot => {
      const key = snapshot.key()

      this.state.messages = this.state.messages.filter(item => item.id !== key)

      this.setState(this.state)
    })

    messages.on('child_changed', snapshot => {
      const key = snapshot.key()

      // Find the message with this key
      const message = this.state.messages.filter(item => item.id === key)[0]

      message.text = snapshot.val().text

      this.setState(this.state)
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

    this.fb.child('/messages').push(message)
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
