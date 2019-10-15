import { fork, call, put, takeLatest, select } from 'redux-saga/effects'
import { SHOPPING_CART_ACTIONS_TYPES } from './types';
import { getShoppingCartApi, getPriceApi, addItemApi, changeItemQuantityApi, deleteItemApi } from './api';
import { getDeliveryType } from './selectors';
import { IAddItemAction, IChangeItemQuantityAction, IDeleteItemAction, ISetDeliveryTypeAction } from './actions';

function* getShoppingCartFlow() {
    try {
        yield takeLatest(SHOPPING_CART_ACTIONS_TYPES.GET_SHOPPING_CART.START, getShoppingCartSaga)

    } catch (error) {
        console.log(error)
    }
}

function* getShoppingCartSaga() {
    try {
        const response = yield call(getShoppingCartApi)
        const items = response.data.items.map((item: any) => {
            return {
                id: item.product._id,
                image: item.product.images.length > 0 ? item.product.images[0] : '',
                name: item.product.name,
                price: item.product.price.price,
                quantity: item.quantity
            }
        })
        yield put({ type: SHOPPING_CART_ACTIONS_TYPES.GET_SHOPPING_CART.SUCCESS, payload: items })
    } catch (error) {
        yield put({ type: SHOPPING_CART_ACTIONS_TYPES.GET_SHOPPING_CART.ERROR, payload: error })
    }
}

function* getPriceFlow() {
    try {
        yield takeLatest(SHOPPING_CART_ACTIONS_TYPES.GET_PRICE.START, getPriceSaga)

    } catch (error) {
        console.log(error)
    }
}

function* getPriceSaga() {
    try {
        const deliveryType = yield select(getDeliveryType)
        const response = yield call(getPriceApi, {
            idDeliveryType: deliveryType
        })
        yield put({ type: SHOPPING_CART_ACTIONS_TYPES.GET_PRICE.SUCCESS, payload: response.data })
    } catch (error) {
        yield put({ type: SHOPPING_CART_ACTIONS_TYPES.GET_SHOPPING_CART.ERROR, payload: error })
    }
}

function* addItemFlow() {
    try {
        yield takeLatest(SHOPPING_CART_ACTIONS_TYPES.ADD_ITEM.START, addItemSaga)

    } catch (error) {
        console.log(error)
    }
}

function* addItemSaga(action: IAddItemAction) {
    try {
        yield call(addItemApi, {
            item: action.payload
        })
        yield call(updateCart)
    } catch (error) {
        yield put({ type: SHOPPING_CART_ACTIONS_TYPES.ADD_ITEM.ERROR, payload: error })
    }
}

function* changeItemQuantityFlow() {
    try {
        yield takeLatest(SHOPPING_CART_ACTIONS_TYPES.CHANGE_ITEM_QUANTITY.START, changeItemQuantitySaga)

    } catch (error) {
        console.log(error)
    }
}

function* changeItemQuantitySaga(action: IChangeItemQuantityAction) {
    try {
        yield call(changeItemQuantityApi, {
            item: action.payload
        })
        yield call(updateCart)
    } catch (error) {
        yield put({ type: SHOPPING_CART_ACTIONS_TYPES.CHANGE_ITEM_QUANTITY.ERROR, payload: error })
    }
}

function* deleteItemFlow() {
    try {
        yield takeLatest(SHOPPING_CART_ACTIONS_TYPES.DELETE_ITEM.START, deleteItemSaga)

    } catch (error) {
        console.log(error)
    }
}

function* deleteItemSaga(action: IDeleteItemAction) {
    try {
        yield call(deleteItemApi, action.payload.idProduct)
        yield call(updateCart)
    } catch (error) {
        yield put({ type: SHOPPING_CART_ACTIONS_TYPES.DELETE_ITEM.ERROR, payload: error })
    }
}

function* setDeliveryTypeFlow() {
    try {
        yield takeLatest(SHOPPING_CART_ACTIONS_TYPES.SET_DELIVERY_TYPE.START, setDeliveryTypeSaga)

    } catch (error) {
        console.log(error)
    }
}

function* setDeliveryTypeSaga(action: ISetDeliveryTypeAction) {
    try {
        yield put({ type: SHOPPING_CART_ACTIONS_TYPES.SET_DELIVERY_TYPE.SUCCESS, payload: action.payload.deliveryType })
        yield call(updateCart)
    } catch (error) {
        yield put({ type: SHOPPING_CART_ACTIONS_TYPES.DELETE_ITEM.ERROR, payload: error })
    }
}

function* updateCart() {
    yield put({ type: SHOPPING_CART_ACTIONS_TYPES.GET_SHOPPING_CART.START })
    yield put({ type: SHOPPING_CART_ACTIONS_TYPES.GET_PRICE.START })
}

export default function* root() {
    yield fork(getShoppingCartFlow)
    yield fork(getPriceFlow)
    yield fork(addItemFlow)
    yield fork(changeItemQuantityFlow)
    yield fork(deleteItemFlow)
    yield fork(setDeliveryTypeFlow)
}