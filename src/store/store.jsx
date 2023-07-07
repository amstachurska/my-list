import { applyMiddleware, combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { reducer as formReducer } from 'redux-form'
import thunkMiddleware from 'redux-thunk'

import movies from './movies/reducers'
import books from './books/reducers'
import alerts from './alerts/reducers'

const combined = combineReducers({ form: formReducer, movies, books, alerts })
export default createStore(combined, composeWithDevTools(applyMiddleware(thunkMiddleware)))
