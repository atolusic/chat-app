import io from 'socket.io-client'

import { SOCKET_URL } from '../constants/socket'
import { SE_SUBSCRIBE_CONVERSATION, NEW_MESSAGE } from '../constants/actions'
import { subscribeConversation } from '../actions/chatActions'

export default () => {
  return storeAPI => {
    const socket = io(SOCKET_URL)

    // Listeners
    socket.on(SE_SUBSCRIBE_CONVERSATION, ({ payload }) => {
      storeAPI.dispatch(subscribeConversation(payload))
    })

    return next => action => {
      switch (action.type) {
        case NEW_MESSAGE:
          socket.emit(NEW_MESSAGE, action.payload)
      }

      return next(action)
    }
  }
}