import { fork, all } from 'redux-saga/effects'

import auth from './auth/sagas'
import shoppingCart from './shopping-cart/sagas'
import analytics from './analytics/sagas'

export function* sagas(): any {
    yield all([
        fork(auth),
        fork(shoppingCart),
        fork(analytics),
    ])
}
