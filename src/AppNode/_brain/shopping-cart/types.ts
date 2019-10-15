export const SHOPPING_CART_ACTIONS_TYPES = {
    GET_SHOPPING_CART: {
        START: "GET_SHOPPING_CART.START",
        SUCCESS: 'GET_SHOPPING_CART.SUCCESS',
        ERROR: 'GET_SHOPPING_CART.ERROR'
    },
    DELETE_ITEM: {
        START: "DELETE_ITEM.START",
        SUCCESS: 'DELETE_ITEM.SUCCESS',
        ERROR: 'DELETE_ITEM.ERROR'
    },
    CHANGE_ITEM_QUANTITY: {
        START: "CHANGE_ITEM_QUANTITY.START",
        SUCCESS: 'CHANGE_ITEM_QUANTITY.SUCCESS',
        ERROR: 'CHANGE_ITEM_QUANTITY.ERROR'
    },
    ADD_ITEM: {
        START: "ADD_ITEM.START",
        SUCCESS: 'ADD_ITEM.SUCCESS',
        ERROR: 'ADD_ITEM.ERROR'
    },
    GET_PRICE: {
        START: "GET_PRICE.START",
        SUCCESS: 'GET_PRICE.SUCCESS',
        ERROR: 'GET_PRICE.ERROR'
    },
    SET_DELIVERY_TYPE: {
        START: "SET_DELIVERY_TYPE.START",
        SUCCESS: "SET_DELIVERY_TYPE.SUCCESS",
        ERROR: "SET_DELIVERY_TYPE.ERROR",
    }
}

export interface ShoppingCartState {
    readonly shoppingCartItems: IShoppingCartItem[]
    readonly prices: IPrices
    readonly deliveryType: string
}

export interface IShoppingCartItem {
    id: string
    image: string
    name: string
    price: number
    quantity: number
}

export interface IPrices {
    amount: number
    deliveryPrice: number
    discount: number
    total: number
    tva: number
}