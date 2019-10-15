import { gotoProducts, gotoProduct } from './../../../../../_brain/router/actions';
import { SideMenuLayoutItem } from '../../../_components/SideMenuLayout/types';
import { addItemAction } from '../../../../../_brain/shopping-cart/actions';
import { pressButtonAction, visitPageAction } from '../../../../../_brain/analytics/actions';
export interface OwnProps {
}

export interface StateProps {
}

export interface DispatchProps {
    gotoProduct: typeof gotoProduct
    addItem: typeof addItemAction
    pressButton: typeof pressButtonAction
    visitPage: typeof visitPageAction
}

export type Props = StateProps & DispatchProps & OwnProps

export interface State {
    page: number
    categories: SideMenuLayoutItem[]
    tags: SideMenuLayoutItem[]
    items: Item[]
}

export interface Item {
    id: string
    title: string,
    subtitle: string,
    img: string,
    price: string,
    details: string,
    firstButton: string,
    secondButton: string,
    onView: () => void,
    onAdd: () => void,
}