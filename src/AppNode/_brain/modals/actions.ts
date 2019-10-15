import { action } from 'typesafe-actions'
import { MODALS_ACTIONS_TYPES } from './types'

export const setModal = (id: string) => action(MODALS_ACTIONS_TYPES.SET, id)
export const closeModal = () => action(MODALS_ACTIONS_TYPES.SET, '')
