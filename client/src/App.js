import React, { Component } from 'react'
import { Provider } from 'react-redux'

import store from './store'

import Chat from './containers/Chat/Chat'

import './App.css'

const App = () => (
  <Provider store={store}>
    <div className="App">
      Chat app
      <Chat />
    </div>
  </Provider>
)

export default App
