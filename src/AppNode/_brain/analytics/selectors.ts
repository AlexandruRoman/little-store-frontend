import { ApplicationState } from "../types";

export const visitsPerDaySelector = (state: ApplicationState) => state.analytics.visitsPerDay
export const userFlowsSelector = (state: ApplicationState) => state.analytics.userFlows
export const timePerPageSelector = (state: ApplicationState) => state.analytics.timePerPage