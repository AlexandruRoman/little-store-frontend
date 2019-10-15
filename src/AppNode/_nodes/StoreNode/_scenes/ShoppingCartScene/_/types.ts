import { IShoppingCartItem, IPrices } from "../../../../../_brain/shopping-cart/types";
import { getShoppingCartAction, changeItemQuantityAction, deleteItemAction, setDeliveryTypeAction } from "../../../../../_brain/shopping-cart/actions";
import { pressButtonAction, visitPageAction } from "../../../../../_brain/analytics/actions";

export interface OwnProps {
}

export interface StateProps {
    deliveryType: string
    items: IShoppingCartItem[]
    prices: IPrices
}

export interface DispatchProps {
    getShoppingCart: typeof getShoppingCartAction
    changeItemQuantity: typeof changeItemQuantityAction
    deleteItem: typeof deleteItemAction
    setDeliveryType: typeof setDeliveryTypeAction
    pressButton: typeof pressButtonAction
    visitPage: typeof visitPageAction
}

export type Props = StateProps & DispatchProps & OwnProps

export interface State {
    deliveryTypeOptions: DeliveryTypeOption[]
}

interface DeliveryTypeOption {
    id: string
    name: string
}