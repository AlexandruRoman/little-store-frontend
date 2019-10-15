import { Reducer } from 'redux'
import { SHOPPING_CART_ACTIONS_TYPES, ShoppingCartState } from './types'

const initialState: ShoppingCartState = {
    prices: {
        amount: 0,
        deliveryPrice: 0,
        discount: 0,
        total: 0,
        tva: 0
    },
    shoppingCartItems: [],
    deliveryType: ''
}

const reducer: Reducer<ShoppingCartState> = (state = initialState, action) => {
    switch (action.type) {
        case SHOPPING_CART_ACTIONS_TYPES.GET_SHOPPING_CART.SUCCESS: {
            return { ...state, shoppingCartItems: action.payload }
        }
        case SHOPPING_CART_ACTIONS_TYPES.GET_PRICE.SUCCESS: {
            return { ...state, prices: action.payload }
        }
        case SHOPPING_CART_ACTIONS_TYPES.SET_DELIVERY_TYPE.SUCCESS: {
            return { ...state, deliveryType: action.payload }
        }
        default: {
            return state
        }
    }
}

export default reducer