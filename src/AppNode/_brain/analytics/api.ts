import { api } from "../api";

export function visitApi() {
    return api.get('client-analytics/visit')
}

export function getVisitsPerDayApi() {
    return api.get('client-analytics/get-visits-per-day')
}

export function pressButtonApi(buttonName: string) {
    return api.post('client-analytics/press-button/' + buttonName)
}

export function getProbabilityApi() {
    return api.get('client-analytics/get-probability')
}

export interface IVisitPageApi {
    page: string
    time: number
}
export function visitPageApi(data: IVisitPageApi) {
    return api.post('client-analytics/visit-page', data)
}

export function getTimePerPageApi() {
    return api.get('client-analytics/get-time-per-page')
}