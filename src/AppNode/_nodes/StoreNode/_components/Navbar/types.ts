import { setModal } from "../../../../_brain/modals/actions";
import { SyntheticEvent, EventHandler } from "react";
import { IPrices, IShoppingCartItem } from "../../../../_brain/shopping-cart/types";
import { pressButtonAction } from "../../../../_brain/analytics/actions";

export interface OwnProps {
    items: Item[]
    onShoppingCartButton: EventHandler<SyntheticEvent>
}

export interface StateProps {
    userName: string
    prices: IPrices
    shoppingCartItems: IShoppingCartItem[]
    role: string
}

export interface DispatchProps {
    setModal: typeof setModal
    pressButton: typeof pressButtonAction
}

export type Props = StateProps & DispatchProps & OwnProps

export interface State {
    connections: number
}


interface Item {
    text: string
    action: EventHandler<SyntheticEvent>
    isActive: boolean
}