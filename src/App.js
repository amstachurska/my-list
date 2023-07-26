import React, { useEffect, useState } from 'react'

import { Provider } from 'react-redux'
import { Redirect, Route, BrowserRouter, Switch } from 'react-router-dom'
import { Button } from 'antd'

import Header from './components/Header/Header'
import MyRoots from './components/My/Roots'
import Alerts from './components/alerts/Alerts'

import store from './store/store'
import { Simulation } from './components/Simulation/Simulation'

import 'antd/dist/antd.css'

//json-server --watch db.json --port 3001 -r routes.json

const App = () => {
  const [simulationCounter, setSimulationCounter] = useState(0)
  const [isSimulation, setIsSimulation] = useState(false)

  useEffect(() => {
    const root = document.getElementById('root')
    if (isSimulation) {
      root.style.overflowY = 'hidden'
      root.style.height = '100vh'
    } else {
      root.style.overflowY = 'initial'
      root.style.height = 'auto'
    }
  }, [isSimulation])

  useEffect(() => {
    if (simulationCounter > 0) {
      window.dispatchEvent(new Event('storage'))

      const distraction = document.createElement('div')
      distraction.style.width = '30px'
      distraction.style.height = '30px'
      distraction.style.backgroundColor = 'red'
      distraction.style.position = 'absolute'
      distraction.style.left = 0
      distraction.style.top = 0
      distraction.style.zIndex = '999'
      distraction.style.borderRadius = '15px'
      distraction.id = 'distraction'
      document.getElementById('root').appendChild(distraction)

      const intervalId = setInterval(() => {
        distraction.style.transform = `translate(${
          Math.random() * (window.innerWidth - 30)
        }px, ${Math.random() * (window.innerHeight - 30)}px)`
      }, 400)

      const timeoutId = setTimeout(() => {
        const titles = document.getElementsByTagName('h1')
        if (titles.length) {
          for (const title of titles) {
            const text = [...title.innerText]
              // eslint-disable-next-line no-self-compare
              .sort(() => Math.random() * 5 > Math.random() * 5)
              .join('')
            title.innerText = text
          }
        }
      }, [100])

      const timeoutIdBtn = setTimeout(() => {
        const buttons = document.getElementsByTagName('button')
        if (buttons.length) {
          for (const button of buttons) {
            const buttonAction = button.onclick
            button.onclick = () => {
              const randomColor = `hsl(${Math.floor(
                Math.random() * 360
              )}deg, ${Math.floor(Math.random() * 100)}%, ${Math.floor(
                Math.random() * 100
              )}%)`
              distraction.style.backgroundColor = randomColor
              button.style.backgroundColor = randomColor

              buttonAction()
            }
          }
        }
      }, [100])

      const intervalIdTitleMovie = setInterval(() => {
        const movieTitleInput = document.querySelector(
          '.movies-list__filter-input#title'
        )
        if (movieTitleInput) {
          if (movieTitleInput.value.toLowerCase() === 'hunt') {
            const movieYearInput = document.querySelector(
              '.movies-list__filter-input#year'
            )
            if (movieYearInput) {
              movieYearInput.focus()
            }
          }
        }
      }, [100])

      const intervalIdAddMovieBtn = setInterval(() => {
        const addMovieBtn = document.querySelector('.add-movie__button-list')
        const addMovieBtns = document.querySelector(
          '.add-movie__button-list button'
        )
        if (addMovieBtn && !addMovieBtns) {
          addMovieBtn.style.position = 'relative'
          const addMovieBtnSize = addMovieBtn.getBoundingClientRect()
          const mask = document.createElement('button')
          mask.className = 'add-movie__button-list'
          mask.innerText = addMovieBtn.innerText
          mask.style.height = addMovieBtnSize.height + 'px'
          mask.style.width = addMovieBtnSize.width + 'px'
          mask.style.position = 'absolute'
          mask.style.top =
            '-' + window.getComputedStyle(addMovieBtn, null)['border-top-width']
          mask.style.left =
            '-' +
            window.getComputedStyle(addMovieBtn, null)['border-left-width']
          mask.onclick = (event) => {
            event.stopPropagation()
          }
          addMovieBtn.appendChild(mask)
        }
      }, 1000)

      return () => {
        clearInterval(intervalId)
        clearTimeout(timeoutId)
        clearTimeout(timeoutIdBtn)
        clearInterval(intervalIdTitleMovie)
        clearInterval(intervalIdAddMovieBtn)
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
