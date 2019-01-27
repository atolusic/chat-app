import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import socketMiddleware from '../utils/socketMiddleware'
import reducers from '../reducers'

const store = createStore(reducers, {}, applyMiddleware(thunk, socketMiddleware()))

export default store