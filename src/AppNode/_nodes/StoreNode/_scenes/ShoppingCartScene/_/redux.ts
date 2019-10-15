import { OwnProps, StateProps, DispatchProps } from "./types";
import { bindActionCreators } from "redux";
import { getDeliveryType, getShoppingCartItems, getPrices } from "../../../../../_brain/shopping-cart/selectors";
import { getShoppingCartAction, changeItemQuantityAction, deleteItemAction, setDeliveryTypeAction } from "../../../../../_brain/shopping-cart/actions";
import { pressButtonAction, visitPageAction } from "../../../../../_brain/analytics/actions";

export function mapStateToProps(state: any, ownProps: OwnProps): StateProps {
    return {
        deliveryType: getDeliveryType(state),
        items: getShoppingCartItems(state),
        prices: getPrices(state)
    }
}

export function mapDispatchToProps(dispatch: any, ownProps: OwnProps): DispatchProps {
    return bindActionCreators({
        getShoppingCart: getShoppingCartAction,
        changeItemQuantity: changeItemQuantityAction,
        deleteItem: deleteItemAction,
        setDeliveryType: setDeliveryTypeAction,
        pressButton: pressButtonAction,
        visitPage: visitPageAction
    }, dispatch)
}