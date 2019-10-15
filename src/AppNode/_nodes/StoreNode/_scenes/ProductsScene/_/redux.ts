import { gotoProducts, gotoProduct } from './../../../../../_brain/router/actions';
import { OwnProps, StateProps, DispatchProps } from "./types";
import { bindActionCreators } from "redux";
import { addItemAction } from '../../../../../_brain/shopping-cart/actions';
import { pressButtonAction, visitPageAction } from '../../../../../_brain/analytics/actions';

export function mapStateToProps(state: any, ownProps: OwnProps): StateProps {
    return {
    }
}

export function mapDispatchToProps(dispatch: any, ownProps: OwnProps): DispatchProps {
    return bindActionCreators({
        gotoProduct,
        addItem: addItemAction,
        pressButton: pressButtonAction,
        visitPage: visitPageAction
    }, dispatch)
}