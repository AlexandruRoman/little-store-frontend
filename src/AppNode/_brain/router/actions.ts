import { action } from 'typesafe-actions'
import { routeConstants } from './types'

export const gotoProducts = () => action(routeConstants.STORE.PRODUCTS)
export const gotoProduct = (id: string) => action(routeConstants.STORE.PRODUCT, { id })
export const gotoShoppingCart = () => action(routeConstants.STORE.SHOPPING_CART)
export const gotoCheckout = () => action(routeConstants.STORE.CHECKOUT)
export const gotoAdminAuthorization = () => action(routeConstants.ADMIN.AUTHORIZATION)
export const gotoAdminCreateStaffAccount = () => action(routeConstants.ADMIN.CREATE_STAFF_ACCOUNT)
export const gotoAdminGraphs = () => action(routeConstants.ADMIN.GRAPHS)
export const gotoAdminProbability = () => action(routeConstants.ADMIN.PROBABILITY)
export const gotoStaffExport = () => action(routeConstants.STAFF.EXPORT)
export const gotoStaffImport = () => action(routeConstants.STAFF.IMPORT)