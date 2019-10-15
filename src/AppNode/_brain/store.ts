import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducers'
import { middleware as routesMiddleware, enhancer as routesEnhancer } from './router/router'
import { sagas } from './sagas'

const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware()
  const composeMiddlewares = applyMiddleware(routesMiddleware, sagaMiddleware)
  const store = createStore(rootReducer, {}, compose(routesEnhancer, composeMiddlewares))
  sagaMiddleware.run(sagas)
  return store
}

export { configureStore };