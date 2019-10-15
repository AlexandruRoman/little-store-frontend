import { gotoAdminAuthorization, gotoAdminCreateStaffAccount, gotoAdminGraphs, gotoAdminProbability } from './../../../../../_brain/router/actions';
export interface OwnProps {
}

export interface StateProps {
}

export interface DispatchProps {
    gotoAdminAuthorization: typeof gotoAdminAuthorization
    gotoAdminCreateStaffAccount: typeof gotoAdminCreateStaffAccount
    gotoAdminGraphs: typeof gotoAdminGraphs
    gotoAdminProbability: typeof gotoAdminProbability
}

export type Props = StateProps & DispatchProps & OwnProps

export interface State {
}
