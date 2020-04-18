import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import gitHub from './gitHub'

const createRootReducer = (history) =>
  combineReducers({
    gitHub,
    router: connectRouter(history)
  })

export default createRootReducer
