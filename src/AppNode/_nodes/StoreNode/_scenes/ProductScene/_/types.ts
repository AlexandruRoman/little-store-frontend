import { addItemAction } from '../../../../../_brain/shopping-cart/actions'
import { pressButtonAction, visitPageAction } from '../../../../../_brain/analytics/actions'

export interface OwnProps {}

interface RoutePayload {
    id: string
}
export interface StateProps {
    payload: RoutePayload
}

export interface DispatchProps {
    addItem: typeof addItemAction
    pressButton: typeof pressButtonAction
    visitPage: typeof visitPageAction
}

export type Props = StateProps & DispatchProps & OwnProps

export interface State {
    item: Item
    quantity: number
}

interface Item {
    id: string
    name: string
    producer: string
    details: string
    price: string
    image: string
    deliveryTime: string
    tva: number
}
