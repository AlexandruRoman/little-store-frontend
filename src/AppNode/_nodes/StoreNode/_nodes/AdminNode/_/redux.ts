import { gotoAdminAuthorization, gotoAdminCreateStaffAccount, gotoAdminGraphs, gotoAdminProbability } from './../../../../../_brain/router/actions';
import { OwnProps, StateProps, DispatchProps } from "./types";
import { bindActionCreators } from "redux";

export function mapStateToProps(state: any, ownProps: OwnProps): StateProps {
    return {
    }
}

export function mapDispatchToProps(dispatch: any, ownProps: OwnProps): DispatchProps {
    return bindActionCreators({
        gotoAdminAuthorization,
        gotoAdminCreateStaffAccount,
        gotoAdminGraphs,
        gotoAdminProbability
    }, dispatch)
}