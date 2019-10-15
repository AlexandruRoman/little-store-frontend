import { OwnProps, StateProps, DispatchProps } from "./types";
import { bindActionCreators } from "redux";
import { getRoute } from "../../_brain/router/selectors";

export function mapStateToProps(state: any, ownProps: OwnProps): StateProps {
    return {
        route: getRoute(state)
    }
}

export function mapDispatchToProps(dispatch: any, ownProps: OwnProps): DispatchProps {
    return bindActionCreators({
    }, dispatch)
}