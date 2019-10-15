export const ANALYTICS_ACTIONS_TYPES = {
    GET_VISITS_PER_DAY: {
        START: 'GET_VISITS_PER_DAY.START',
        SUCCESS: 'GET_VISITS_PER_DAY.SUCCESS',
        ERROR: 'GET_VISITS_PER_DAY.ERROR'
    },
    VISIT: 'VISIT',
    GET_USER_FLOWS: {
        START: 'GET_USER_FLOWS.START',
        SUCCESS: 'GET_USER_FLOWS.SUCCESS',
        ERROR: 'GET_USER_FLOWS.ERROR'
    },
    PRESS_BUTTON: 'PRESS_BUTTON',
    GET_TIME_PER_PAGE: {
        START: 'GET_TIME_PER_PAGE.START',
        SUCCESS: 'GET_TIME_PER_PAGE.SUCCESS',
        ERROR: 'GET_TIME_PER_PAGE.ERROR'
    },
    VISIT_PAGE: 'VISIT_PAGE'
}

export interface AnalyticsState {
    readonly visitsPerDay: VisitsPerDay[]
    readonly userFlows: UserFlow[]
    readonly timePerPage: TimePerPage[]
}

export interface VisitsPerDay {
    readonly day: string
    readonly visits: number
}

export interface UserFlow {
    readonly buttons: string[]
    readonly probability: number
}

export interface TimePerPage {
    readonly page: string
    readonly time: number
}