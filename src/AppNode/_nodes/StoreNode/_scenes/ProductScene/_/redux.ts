import { OwnProps, StateProps, DispatchProps } from "./types";
import { bindActionCreators } from "redux";
import { getRoute } from "../../../../../_brain/router/selectors";
import { addItemAction } from "../../../../../_brain/shopping-cart/actions";
import { pressButtonAction, visitPageAction } from "../../../../../_brain/analytics/actions";

export function mapStateToProps(state: any, ownProps: OwnProps): StateProps {
    return {
        payload: getRoute(state).payload as any
    }
}

export function mapDispatchToProps(dispatch: any, ownProps: OwnProps): DispatchProps {
    return bindActionCreators({
        addItem: addItemAction,
        pressButton: pressButtonAction,
        visitPage: visitPageAction
    }, dispatch)
}