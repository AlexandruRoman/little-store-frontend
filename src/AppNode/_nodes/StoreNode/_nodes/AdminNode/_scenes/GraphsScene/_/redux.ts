import { OwnProps, StateProps, DispatchProps } from "./types";
import { bindActionCreators } from "redux";
import { getVisitsPerDayAction, getTimePerPageAction } from "../../../../../../../_brain/analytics/actions";
import { visitsPerDaySelector, timePerPageSelector } from "../../../../../../../_brain/analytics/selectors";

export function mapStateToProps(state: any, ownProps: OwnProps): StateProps {
    return {
        visitsPerDay: visitsPerDaySelector(state),
        timePerPage: timePerPageSelector(state)
    }
}

export function mapDispatchToProps(dispatch: any, ownProps: OwnProps): DispatchProps {
    return bindActionCreators({
        getVisitsPerDay: getVisitsPerDayAction,
        getTimePerPage: getTimePerPageAction
    }, dispatch)
}