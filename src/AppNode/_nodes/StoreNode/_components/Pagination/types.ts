import { SyntheticEvent, EventHandler } from "react";

export interface OwnProps {
    page: number
    total: number
    onPageChange: (page: number) => void 
}

export interface StateProps {
}

export interface DispatchProps {
}

export type Props = StateProps & DispatchProps & OwnProps

export interface State {
}