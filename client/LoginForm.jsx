import React from 'react'

export default class LoginForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      user: ''
    }
  }

  handleChange(event) {
    const userName = event.target.value

    this.setState({ user: userName })
  }

  handleKeyUp(event) {
    const key = event.which

    if (key === 13)
      this.props.onSubmit(this.state.user)
  }

  render() {
    return (
      <div className="login-form">
        <input type="text"
          value={this.state.user}
          onChange={event => this.handleChange(event)}
          onKeyUp={event => this.handleKeyUp(event)} />
        <button type="submit"
          onClick={() => this.props.onSubmit(this.state.user)}>Log in</button>
      </div>
    )
  }
}
