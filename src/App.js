import React, { useState } from 'react'

import { Provider } from 'react-redux'
import { Redirect, Route, BrowserRouter, Switch } from 'react-router-dom'

import Header from './components/Header/Header'
import MyRoots from './components/My/Roots'
import TetrisRoots from './components/Tetris/Roots'
import Alerts from './components/alerts/Alerts'

import store from './store/store'
import { Simulation } from './components/Simulation/Simulation'

//json-server --watch db.json --port 3001 -r routes.json

const App = () => {
  const [simulationCounter, setSimulationCounter] = useState(0)
  const [isSimulation, setIsSimulation] = useState(false)
  const handleSimulation = () => {
    setSimulationCounter((prevValue) => prevValue + 1)
  }

  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Alerts />
          {isSimulation && (
            <Simulation
              simulationCounter={simulationCounter}
              increaseSimulationCounter={() =>
                setSimulationCounter((prevValue) => prevValue + 1)
              }
              goBackToApp={() => setIsSimulation(false)}
            />
          )}
          <Header>
            <button onClick={() => setIsSimulation(true)} type="button">
              Turn on reinstallment simulation
            </button>
          </Header>
        </div>
        <Switch>
          {/* <Route component={MyRoots} path={['/my/books', '/my/movies']} /> */}
          <Route component={MyRoots} path="/my" />
          <Route component={TetrisRoots} path="/tetris" />
          <Redirect from="*" to="my" />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default App
