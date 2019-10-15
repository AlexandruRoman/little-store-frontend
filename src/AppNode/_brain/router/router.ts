import { connectRoutes } from 'redux-first-router'
import { appRoutes } from './types'

const {
    reducer,
    middleware,
    enhancer
} = connectRoutes(appRoutes)

export {
    reducer,
    middleware,
    enhancer
}
