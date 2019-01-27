import { SUBSCRIBE_CONVERSATION, NEW_MESSAGE } from '../constants/actions'

const initialState = {
  messages: []
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SUBSCRIBE_CONVERSATION:
      return {
        ...state,
        messages: [...state.messages, action.payload]
      }
    default:
      return state
  }
}