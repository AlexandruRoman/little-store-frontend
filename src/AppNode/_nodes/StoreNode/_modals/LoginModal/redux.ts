import { OwnProps, StateProps, DispatchProps } from "./types";
import { bindActionCreators } from "redux";
import { loginAction } from "../../../../_brain/auth/actions";
import { closeModal } from "../../../../_brain/modals/actions";
import { pressButtonAction } from "../../../../_brain/analytics/actions";

export function mapStateToProps(state: any, ownProps: OwnProps): StateProps {
    return {
    }
}

export function mapDispatchToProps(dispatch: any, ownProps: OwnProps): DispatchProps {
    return bindActionCreators({
        loginAction,
        closeModalAction: closeModal,
        pressButton: pressButtonAction
    }, dispatch)
}