import React, { useEffect, useState } from 'react'

import { Provider } from 'react-redux'
import { Redirect, Route, BrowserRouter, Switch } from 'react-router-dom'
import { Button } from 'antd'

import Header from './components/Header/Header'
import MyRoots from './components/My/Roots'
import Alerts from './components/alerts/Alerts'

import store from './store/store'
import { Simulation } from './components/Simulation/Simulation'

//json-server --watch db.json --port 3001 -r routes.json

const App = () => {
  const [simulationCounter, setSimulationCounter] = useState(0)
  const [isSimulation, setIsSimulation] = useState(false)

  useEffect(() => {
    if (simulationCounter > 0) {
      const distraction = document.createElement('div')
      distraction.style.width = '30px'
      distraction.style.height = '30px'
      distraction.style.backgroundColor = 'red'
      distraction.style.position = 'absolute'
      distraction.style.zIndex = '100000'
      distraction.style.borderRadius = '15px'
      document.getElementById('root').appendChild(distraction)

      const intervalId = setInterval(() => {
        distraction.style.transform = `translate(${
          Math.random() * (window.innerWidth - 30)
        }px, ${Math.random() * (window.innerHeight - 30)}px)`
      }, 400)

      return () => {
        clearInterval(intervalId)
      }
    }
  }, [simulationCounter])

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
            <Button
              className="header__reinstallation"
              type="primary"
              onClick={() => setIsSimulation(true)}
            >
              Turn on reinstallment simulation
            </Button>
          </Header>
        </div>
        <Switch>
          {/* <Route component={MyRoots} path={['/my/books', '/my/movies']} /> */}
          <Route component={MyRoots} path="/my" />
          <Redirect from="*" to="my" />
        </Switch>
      </BrowserRouter>
    </Provider>
  )
}

export default App
