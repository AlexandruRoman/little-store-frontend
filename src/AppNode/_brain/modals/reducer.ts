import { Reducer } from 'redux'
import { MODALS_ACTIONS_TYPES, ModalsState } from './types'

const initialState: ModalsState = {
    id: ''
}

const reducer: Reducer<ModalsState> = (state = initialState, action) => {
    switch (action.type) {
        case MODALS_ACTIONS_TYPES.SET: {
            return { ...state, id: action.payload }
        }
        default: {
            return state
        }
    }
}

export default reducer