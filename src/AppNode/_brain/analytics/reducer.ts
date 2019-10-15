import { Reducer } from 'redux'
import { ANALYTICS_ACTIONS_TYPES, AnalyticsState } from './types'

const initialState: AnalyticsState = {
    visitsPerDay: [],
    userFlows: [],
    timePerPage: []
}

const reducer: Reducer<AnalyticsState> = (state = initialState, action) => {
    switch (action.type) {
        case ANALYTICS_ACTIONS_TYPES.GET_VISITS_PER_DAY.SUCCESS: {
            return { ...state, visitsPerDay: action.payload.visitsPerDay }
        }
        case ANALYTICS_ACTIONS_TYPES.GET_USER_FLOWS.SUCCESS: {
            return { ...state, userFlows: action.payload.userFlows }
        }
        case ANALYTICS_ACTIONS_TYPES.GET_TIME_PER_PAGE.SUCCESS: {
            return { ...state, timePerPage: action.payload.timePerPage }
        }
        default: {
            return state
        }
    }
}

export default reducer