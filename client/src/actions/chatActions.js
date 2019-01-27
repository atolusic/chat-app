import { NEW_MESSAGE, SUBSCRIBE_CONVERSATION } from "../constants/actions";

export function subscribeConversation(payload) {
  return {
    type: SUBSCRIBE_CONVERSATION,
    payload
  }
}

export function newMessage(payload) {
  return {
    type: NEW_MESSAGE,
    payload
  }
}

