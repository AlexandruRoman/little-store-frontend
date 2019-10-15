import { gotoProducts, gotoAdminAuthorization, gotoStaffExport, gotoShoppingCart } from './../../../_brain/router/actions';
import { OwnProps, StateProps, DispatchProps } from "./types";
import { bindActionCreators } from "redux";
import { getUserRole } from '../../../_brain/auth/selectors';
import { pressButtonAction } from '../../../_brain/analytics/actions';

export function mapStateToProps(state: any, ownProps: OwnProps): StateProps {
    return {
        role: getUserRole(state)
    }
}

export function mapDispatchToProps(dispatch: any, ownProps: OwnProps): DispatchProps {
    return bindActionCreators({
        gotoProducts,
        gotoAdminAuthorization,
        gotoStaffExport,
        gotoShoppingCart,
        pressButton: pressButtonAction
    }, dispatch)
}