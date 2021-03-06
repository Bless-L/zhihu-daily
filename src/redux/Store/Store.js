import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'

import {createStore, applyMiddleware} from 'redux';
import rootReducers from '../Reducer/Reducers'

const store = createStore(
  rootReducers,
  applyMiddleware(
    thunkMiddleware,
    createLogger()
  )
)

export default store