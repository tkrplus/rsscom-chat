import { createStore, applyMiddleware } from 'redux'
import reducer from './modules'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'

const middleware = [
  thunk,
  createLogger()
]

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

export default store
