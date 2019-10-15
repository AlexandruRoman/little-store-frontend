import { setModal } from './../../../../_brain/modals/actions';
import { OwnProps, StateProps, DispatchProps } from "./types";
import { bindActionCreators } from "redux";
import { getUserName, getUserRole } from '../../../../_brain/auth/selectors';
import { getPrices, getShoppingCartItems } from '../../../../_brain/shopping-cart/selectors';
import { pressButtonAction } from '../../../../_brain/analytics/actions';

export function mapStateToProps(state: any, ownProps: OwnProps): StateProps {
    return {
        userName: getUserName(state),
        prices: getPrices(state),
        shoppingCartItems: getShoppingCartItems(state),
        role: getUserRole(state)
    }
}

export function mapDispatchToProps(dispatch: any, ownProps: OwnProps): DispatchProps {
    return bindActionCreators({
        setModal,
        pressButton: pressButtonAction
    }, dispatch)
}