import { ApplicationState } from "../types";

export const getUserName = (state: ApplicationState) => state.auth.userName
export const getUserRole = (state: ApplicationState) => state.auth.role