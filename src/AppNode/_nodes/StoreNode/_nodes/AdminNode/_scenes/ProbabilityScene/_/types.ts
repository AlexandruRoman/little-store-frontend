import { getUserFlowsAction } from "../../../../../../../_brain/analytics/actions";
import { UserFlow } from "../../../../../../../_brain/analytics/types";

export interface OwnProps {
}

export interface StateProps {
    userFlows: UserFlow[]
}

export interface DispatchProps {
    getUserFlows: typeof getUserFlowsAction
}

export type Props = StateProps & DispatchProps & OwnProps

export interface State {
}
