export const AUTH_ACTIONS_TYPES = {
    LOGIN: {
        START: 'LOGIN.START',
        SUCCESS: 'LOGIN.SUCCESS',
        ERROR: 'LOGIN.ERROR'
    },
    GUEST: {
        START: 'GUEST.START',
        SUCCESS: 'GUEST.SUCCESS',
        ERROR: 'GUEST.ERROR'
    },
    SIGNUP: {
        START: 'SIGNUP.START',
        SUCCESS: 'SIGNUP.SUCCESS',
        ERROR: 'SIGNUP.ERROR'
    },
    LOGOUT: 'LOGOUT',
    SET_USER_NAME: 'SET_USER_NAME',
    SET_ROLE: 'SET_ROLE',
    SET_PERMISSIONS: 'SET_PERMISSIONS',
}

export interface AuthState {
    readonly isLogged: boolean
    readonly userName: string
    readonly role: string
    readonly permissions: string[]
}

export const ROLES = {
    CLIENT: 'CLIENT',
    GUEST: "GUEST",
    STAFF: "STAFF",
    ADMIN: 'ADMIN'
}