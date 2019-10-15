import { gotoStaffExport, gotoShoppingCart } from './../../../_brain/router/actions';
import { gotoProducts, gotoAdminAuthorization } from "../../../_brain/router/actions";
import { pressButtonAction } from '../../../_brain/analytics/actions';

export interface OwnProps {
}

export interface StateProps {
    role: string
}

export interface DispatchProps {
    gotoProducts: typeof gotoProducts
    gotoAdminAuthorization: typeof gotoAdminAuthorization
    gotoStaffExport: typeof gotoStaffExport
    gotoShoppingCart: typeof gotoShoppingCart
    pressButton: typeof pressButtonAction
}

export type Props = StateProps & DispatchProps & OwnProps

export interface State {
}
