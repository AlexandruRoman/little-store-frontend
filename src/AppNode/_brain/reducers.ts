import { combineReducers } from 'redux'

import { ApplicationState } from './types'
import locationReducer from './router/reducer'
import modalsReducer from './modals/reducer'
import authReducer from './auth/reducer'
import shoppingCartReducer from './shopping-cart/reducer'
import analyticsReducer from './analytics/reducer'

const rootReducer = combineReducers<ApplicationState>({
  location: locationReducer,
  modals: modalsReducer,
  auth: authReducer,
  shoppingCart: shoppingCartReducer,
  analytics: analyticsReducer
});

export default rootReducer;