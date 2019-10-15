import { action } from "typesafe-actions";
import { SHOPPING_CART_ACTIONS_TYPES } from "./types";
import { string } from "prop-types";

export const getShoppingCartAction = () => action<string>(SHOPPING_CART_ACTIONS_TYPES.GET_SHOPPING_CART.START)
export const getPriceAction = () => action<string>(SHOPPING_CART_ACTIONS_TYPES.GET_PRICE.START)

export interface IAddItemAction {
    type: string
    payload: IAddItemActionPayload
}
interface IAddItemActionPayload {
    idProduct: string
    quantity: number
}
export const addItemAction = (idProduct: string, quantity: number) =>
    action<string, IAddItemActionPayload>(SHOPPING_CART_ACTIONS_TYPES.ADD_ITEM.START, { idProduct, quantity })

export interface IChangeItemQuantityAction {
    type: string
    payload: IChangeItemQuantityActionPayload
}
interface IChangeItemQuantityActionPayload {
    idProduct: string
    quantity: number
}
export const changeItemQuantityAction = (idProduct: string, quantity: number) =>
    action<string, IChangeItemQuantityActionPayload>(SHOPPING_CART_ACTIONS_TYPES.CHANGE_ITEM_QUANTITY.START, { idProduct, quantity })

export interface IDeleteItemAction {
    type: string
    payload: IDeleteItemActionPayload
}
interface IDeleteItemActionPayload {
    idProduct: string
}
export const deleteItemAction = (idProduct: string) =>
    action<string, IDeleteItemActionPayload>(SHOPPING_CART_ACTIONS_TYPES.DELETE_ITEM.START, { idProduct })

export interface ISetDeliveryTypeAction {
    type: string
    payload: ISetDeliveryTypeActionPayload
}
interface ISetDeliveryTypeActionPayload {
    deliveryType: string
}
export const setDeliveryTypeAction = (deliveryType: string) =>
    action<string, ISetDeliveryTypeActionPayload>(SHOPPING_CART_ACTIONS_TYPES.SET_DELIVERY_TYPE.START, { deliveryType })

