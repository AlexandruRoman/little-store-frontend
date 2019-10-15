import { action } from "typesafe-actions";
import { ANALYTICS_ACTIONS_TYPES, VisitsPerDay, UserFlow, TimePerPage } from "./types";

export const getVisitsPerDayAction = () => action(ANALYTICS_ACTIONS_TYPES.GET_VISITS_PER_DAY.START)

export interface ISetVisitsPerDayAction {
    type: string
    payload: ISetVisitsPerDayActionPayload
}
interface ISetVisitsPerDayActionPayload {
    visitsPerDay: VisitsPerDay[]
}
export const setVisitsPerDayAction = (visitsPerDay: VisitsPerDay[]) => action<string, ISetVisitsPerDayActionPayload>(ANALYTICS_ACTIONS_TYPES.GET_VISITS_PER_DAY.SUCCESS, { visitsPerDay })


export interface IPressButtonAction {
    type: string
    payload: IPressButtonActionPayload
}
interface IPressButtonActionPayload {
    buttonName: string
}
export const pressButtonAction = (buttonName: string) => action<string, IPressButtonActionPayload>(ANALYTICS_ACTIONS_TYPES.PRESS_BUTTON, { buttonName })

export const getUserFlowsAction = () => action(ANALYTICS_ACTIONS_TYPES.GET_USER_FLOWS.START)

export interface ISetUserFlowsAction {
    type: string
    payload: ISetUserFlowsActionPayload
}
interface ISetUserFlowsActionPayload {
    userFlows: UserFlow[]
}
export const setUserFlowsAction = (userFlows: UserFlow[]) => action<string, ISetUserFlowsActionPayload>(ANALYTICS_ACTIONS_TYPES.GET_USER_FLOWS.SUCCESS, { userFlows })


export interface IVisitPageAction {
    type: string
    payload: IVisitPageActionPayload
}
interface IVisitPageActionPayload {
    page: string
    time: number
}
export const visitPageAction = (page: string, time: number) => action<string, IVisitPageActionPayload>(ANALYTICS_ACTIONS_TYPES.VISIT_PAGE, { page, time })

export const getTimePerPageAction = () => action(ANALYTICS_ACTIONS_TYPES.GET_TIME_PER_PAGE.START)

export interface ISetTimePerPageAction {
    type: string
    payload: ISetTimePerPageActionPayload
}
interface ISetTimePerPageActionPayload {
    timePerPage: TimePerPage[]
}
export const setTimePerPageAction = (timePerPage: TimePerPage[]) => action<string, ISetTimePerPageActionPayload>(ANALYTICS_ACTIONS_TYPES.GET_TIME_PER_PAGE.SUCCESS, { timePerPage })
