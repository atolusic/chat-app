import React, { Component } from 'react'
import { connect } from 'react-redux'

import { newMessage } from '../../actions/chatActions'

class Chat extends Component {
  render() {
    const { messages, dispatch } = this.props
    return (
      <div>
        <ul>
          {messages.map(msg => <li key={msg}>{msg}</li>)}
        </ul>
        <input type='text' ref={i => this.i = i} />
        <button onClick={e => dispatch(newMessage(this.i.value))
        }>Submit</button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  messages: state.chat.messages
})

export default connect(mapStateToProps)(Chat)