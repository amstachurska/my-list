import React from 'react'

import { Provider } from 'react-redux'
import { Redirect, Route, BrowserRouter, Switch } from 'react-router-dom'

import Header from './components/Header/Header'
import MyRoots from './components/My/Roots'
import TetrisRoots from './components/Tetris/Roots'

import store from './store/store'

//json-server --watch db.json --port 3001 -r routes.json

const App = () => (
  <Provider store={store}>
    <BrowserRouter>
    <Header />
      <Switch>
        {/* <Route component={MyRoots} path={['/my/books', '/my/movies']} /> */}
        <Route component={MyRoots} path="/my" />
        <Route component={TetrisRoots} path="/tetris" />
        <Redirect from="*" to="my" />
      </Switch>
    </BrowserRouter>
  </Provider>
)

export default App
