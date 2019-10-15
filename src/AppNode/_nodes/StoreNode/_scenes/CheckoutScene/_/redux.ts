import { OwnProps, StateProps, DispatchProps } from "./types";
import { bindActionCreators } from "redux";

export function mapStateToProps(state: any, ownProps: OwnProps): StateProps {
    return {
    }
}

export function mapDispatchToProps(dispatch: any, ownProps: OwnProps): DispatchProps {
    return bindActionCreators({
    }, dispatch)
}