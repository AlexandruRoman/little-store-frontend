import { api } from '../api'
import Axios from 'axios'

export function guestApi() {
    return Axios.get('http://api:3000/auth/guest')
}

export interface ILoginApi {
    email: string
    password: string
}
export function loginApi(data: ILoginApi) {
    return api.post('auth/login', data)
}

export interface ISignupApi {
    name: string
    email: string
    password: string
}
export function signupApi(data: ISignupApi) {
    return api.post('auth/signup', data)
}
