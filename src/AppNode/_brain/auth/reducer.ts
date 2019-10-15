import { Reducer } from 'redux'
import { AUTH_ACTIONS_TYPES, AuthState } from './types'

const initialState: AuthState = {
    isLogged: false,
    userName: '',
    role: '',
    permissions: []
}

const reducer: Reducer<AuthState> = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_ACTIONS_TYPES.LOGIN.SUCCESS: {
            return { ...state, isLogged: true }
        }
        case AUTH_ACTIONS_TYPES.SET_USER_NAME: {
            return { ...state, userName: action.payload }
        }
        case AUTH_ACTIONS_TYPES.SET_PERMISSIONS: {
            return { ...state, permissions: action.payload }
        }
        case AUTH_ACTIONS_TYPES.SET_ROLE: {
            return { ...state, role: action.payload }
        }
        default: {
            return state
        }
    }
}

export default reducer