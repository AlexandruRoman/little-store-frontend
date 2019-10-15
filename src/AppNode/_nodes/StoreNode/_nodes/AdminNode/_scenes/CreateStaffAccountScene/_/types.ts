export interface OwnProps {
}

export interface StateProps {
}

export interface DispatchProps {
}

export type Props = StateProps & DispatchProps & OwnProps

export interface State {
    name: string
    email: string
    password: string
}
