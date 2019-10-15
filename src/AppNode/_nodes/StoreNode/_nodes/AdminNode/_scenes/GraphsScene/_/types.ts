import { VisitsPerDay, TimePerPage } from "../../../../../../../_brain/analytics/types";
import { getVisitsPerDayAction, getTimePerPageAction } from "../../../../../../../_brain/analytics/actions";

export interface OwnProps {
}

export interface StateProps {
    visitsPerDay: VisitsPerDay[]
    timePerPage: TimePerPage[]
}

export interface DispatchProps {
    getVisitsPerDay: typeof getVisitsPerDayAction
    getTimePerPage: typeof getTimePerPageAction
}

export type Props = StateProps & DispatchProps & OwnProps

export interface State {
}
