import { LocationState } from "redux-first-router";

export interface OwnProps {
}

export interface StateProps {
    route: LocationState
}

export interface DispatchProps {
}

export type Props = StateProps & DispatchProps & OwnProps

export interface State {
}
