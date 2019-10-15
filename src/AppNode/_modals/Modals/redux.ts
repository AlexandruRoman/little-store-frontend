import { OwnProps, StateProps, DispatchProps } from "./types";
import { bindActionCreators } from "redux";
import { getModalId } from "../../_brain/modals/selectors";

export function mapStateToProps(state: any, ownProps: OwnProps): StateProps {
    return {
        stateId: getModalId(state)
    }
}

export function mapDispatchToProps(dispatch: any, ownProps: OwnProps): DispatchProps {
    return bindActionCreators({
    }, dispatch)
}