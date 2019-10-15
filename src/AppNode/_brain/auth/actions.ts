import { action } from "typesafe-actions";
import { AUTH_ACTIONS_TYPES } from "./types";


export interface ILoginAction {
    type: string
    payload: ILoginActionPayload
}
interface ILoginActionPayload {
    email: string
    password: string
}

export const loginAction = (email: string, password: string) => action<string, ILoginActionPayload>(AUTH_ACTIONS_TYPES.LOGIN.START, { email, password })


export interface ISignupAction {
    type: string
    payload: ISignupActionPayload
}
interface ISignupActionPayload {
    name: string
    email: string
    password: string
}

export const signupAction = (name: string, email: string, password: string) => action<string, ISignupActionPayload>(AUTH_ACTIONS_TYPES.SIGNUP.START, { name, email, password })