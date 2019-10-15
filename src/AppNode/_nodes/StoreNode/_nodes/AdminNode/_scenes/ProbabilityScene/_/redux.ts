import { OwnProps, StateProps, DispatchProps } from "./types";
import { bindActionCreators } from "redux";
import { userFlowsSelector } from "../../../../../../../_brain/analytics/selectors";
import { getUserFlowsAction } from "../../../../../../../_brain/analytics/actions";

export function mapStateToProps(state: any, ownProps: OwnProps): StateProps {
    return {
        userFlows: userFlowsSelector(state)
    }
}

export function mapDispatchToProps(dispatch: any, ownProps: OwnProps): DispatchProps {
    return bindActionCreators({
        getUserFlows: getUserFlowsAction
    }, dispatch)
}