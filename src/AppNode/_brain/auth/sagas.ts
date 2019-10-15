import { fork, takeEvery, call, put, takeLatest, take } from 'redux-saga/effects'
import { AUTH_ACTIONS_TYPES } from './types';
import { loginApi, guestApi, signupApi } from './api';
import { IJwt } from '../jwt/types';
import { setObject, clearObject, getObject, getString, setString } from '../storage/storage';
import jwtDecode from 'jwt-decode'
import { ILoginAction, ISignupAction, loginAction } from './actions';
import { SHOPPING_CART_ACTIONS_TYPES } from '../shopping-cart/types';
import { ANALYTICS_ACTIONS_TYPES } from '../analytics/types';

function* loginFlow() {
    try {
        yield takeLatest(AUTH_ACTIONS_TYPES.LOGIN.START, loginSaga)

    } catch (error) {
        console.log(error)
    }
}

function* loginSaga(action: ILoginAction) {
    try {
        const tokenResponse = yield call(loginApi, {
            email: action.payload.email,
            password: action.payload.password
        })
        yield put({ type: AUTH_ACTIONS_TYPES.LOGIN.SUCCESS })
        yield call(setString, 'token', tokenResponse.data)
        yield call(extractDataFromToken)
    } catch (error) {
        yield put({ type: AUTH_ACTIONS_TYPES.LOGIN.ERROR, payload: error })
    }
}
function* signupFlow() {
    try {
        yield takeLatest(AUTH_ACTIONS_TYPES.SIGNUP.START, signupSaga)

    } catch (error) {
        console.log(error)
    }
}

function* signupSaga(action: ISignupAction) {
    try {
        yield call(signupApi, {
            name: action.payload.name,
            email: action.payload.email,
            password: action.payload.password
        })
        yield put({ type: AUTH_ACTIONS_TYPES.SIGNUP.SUCCESS })
        yield put(loginAction(action.payload.email, action.payload.password))
    } catch (error) {
        yield put({ type: AUTH_ACTIONS_TYPES.SIGNUP.ERROR, payload: error })
    }
}

function* logoutFlow() {
    while (true) {
        yield take(AUTH_ACTIONS_TYPES.LOGOUT)
        yield call(clearObject, 'token')
        yield put({ type: AUTH_ACTIONS_TYPES.SET_USER_NAME, payload: '' })
        yield put({ type: AUTH_ACTIONS_TYPES.SET_ROLE, payload: '' })
        yield put({ type: AUTH_ACTIONS_TYPES.SET_PERMISSIONS, payload: [] })
    }
}

function* guestSaga() {
    try {
        yield put({ type: AUTH_ACTIONS_TYPES.GUEST.START })
        const tokenResponse = yield call(guestApi)
        yield put({ type: AUTH_ACTIONS_TYPES.GUEST.SUCCESS })
        yield call(setObject, 'token', tokenResponse.data)
        yield call(extractDataFromToken)
    } catch (error) {
        yield put({ type: AUTH_ACTIONS_TYPES.GUEST.ERROR, payload: error })
        throw error
    }
}

function* init() {
    const tokenData = yield call(extractDataFromToken)
    if (!tokenData)
        yield call(guestSaga)
}

function* extractDataFromToken() {
    const token = yield call(getString, 'token')
    if (!token)
        return null
    const tokenData: IJwt = jwtDecode(token)
    if (!tokenData.user)
        return null
    if (tokenData) {
        yield put({ type: AUTH_ACTIONS_TYPES.SET_USER_NAME, payload: tokenData.user.name })
        yield put({ type: AUTH_ACTIONS_TYPES.SET_ROLE, payload: tokenData.user.role.name })
        yield put({ type: AUTH_ACTIONS_TYPES.SET_PERMISSIONS, payload: tokenData.user.role.permissions.map(x => x.name) })
        yield put({ type: SHOPPING_CART_ACTIONS_TYPES.SET_DELIVERY_TYPE.SUCCESS, payload: '5cb0a571279da820dcfd3e96' })
        yield put({ type: SHOPPING_CART_ACTIONS_TYPES.GET_SHOPPING_CART.START })
        yield put({ type: SHOPPING_CART_ACTIONS_TYPES.GET_PRICE.START })
        yield put({ type: ANALYTICS_ACTIONS_TYPES.VISIT })
    }
    return tokenData
}

export default function* root() {
    yield fork(init)
    yield fork(loginFlow)
    yield fork(signupFlow)
    yield fork(logoutFlow)
}