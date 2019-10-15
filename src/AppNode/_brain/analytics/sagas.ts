import { fork, takeEvery, call, put, takeLatest, take } from 'redux-saga/effects'
import { ANALYTICS_ACTIONS_TYPES } from './types'
import { visitApi, getVisitsPerDayApi, pressButtonApi, getProbabilityApi, visitPageApi, getTimePerPageApi } from './api'
import {
    setVisitsPerDayAction,
    IPressButtonAction,
    setUserFlowsAction,
    IVisitPageAction,
    setTimePerPageAction
} from './actions'

function delay(ms: number) {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, ms)
    })
}

function* visitFlow() {
    try {
        yield takeLatest(ANALYTICS_ACTIONS_TYPES.VISIT, visitSaga)
    } catch (error) {
        console.log(error)
    }
}
function* visitSaga() {
    try {
        yield delay(2000)
        yield call(visitApi)
    } catch (error) {
        console.log(error)
    }
}

function* getVisitsPerDayFlow() {
    try {
        yield takeLatest(ANALYTICS_ACTIONS_TYPES.GET_VISITS_PER_DAY.START, getVisitsPerDaySaga)
    } catch (error) {
        console.log(error)
    }
}

function* getVisitsPerDaySaga() {
    try {
        const response = yield call(getVisitsPerDayApi)
        yield put(setVisitsPerDayAction(response.data))
    } catch (error) {
        yield put({ type: ANALYTICS_ACTIONS_TYPES.GET_VISITS_PER_DAY.ERROR, payload: error })
    }
}

function* pressButtonFlow() {
    try {
        yield takeLatest(ANALYTICS_ACTIONS_TYPES.PRESS_BUTTON, pressButtonSaga)
    } catch (error) {
        console.log(error)
    }
}
function* pressButtonSaga(action: IPressButtonAction) {
    try {
        yield delay(1000)
        yield call(pressButtonApi, action.payload.buttonName)
    } catch (error) {
        console.log(error)
    }
}

function* getUserFlowsFlow() {
    try {
        yield takeLatest(ANALYTICS_ACTIONS_TYPES.GET_USER_FLOWS.START, getUserFlowsSaga)
    } catch (error) {
        console.log(error)
    }
}

function* getUserFlowsSaga() {
    try {
        const response = yield call(getProbabilityApi)
        console.log(response)
        yield put(setUserFlowsAction(response.data))
    } catch (error) {
        yield put({ type: ANALYTICS_ACTIONS_TYPES.GET_USER_FLOWS.ERROR, payload: error })
    }
}

function* visitPageFlow() {
    try {
        yield takeLatest(ANALYTICS_ACTIONS_TYPES.VISIT_PAGE, visitPageSaga)
    } catch (error) {
        console.log(error)
    }
}
function* visitPageSaga(action: IVisitPageAction) {
    try {
        yield call(visitPageApi, action.payload)
    } catch (error) {
        console.log(error)
    }
}

function* getTimePerPageFlow() {
    try {
        yield takeLatest(ANALYTICS_ACTIONS_TYPES.GET_TIME_PER_PAGE.START, getTimePerPageSaga)
    } catch (error) {
        console.log(error)
    }
}

function* getTimePerPageSaga() {
    try {
        const response = yield call(getTimePerPageApi)
        console.log(response)
        yield put(setTimePerPageAction(response.data))
    } catch (error) {
        yield put({ type: ANALYTICS_ACTIONS_TYPES.GET_TIME_PER_PAGE.ERROR, payload: error })
    }
}

export default function* root() {
    yield fork(visitFlow)
    yield fork(getVisitsPerDayFlow)
    yield fork(pressButtonFlow)
    yield fork(getUserFlowsFlow)
    yield fork(visitPageFlow)
    yield fork(getTimePerPageFlow)
}
