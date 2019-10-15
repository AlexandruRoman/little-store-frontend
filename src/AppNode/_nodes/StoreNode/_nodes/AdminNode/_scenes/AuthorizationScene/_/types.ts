export interface OwnProps {
}

export interface StateProps {
}

export interface DispatchProps {
}

export type Props = StateProps & DispatchProps & OwnProps

export interface State {
    staffPermissions: string[]
    allPermissions: Permission[]
}

interface Permission {
    _id: string
    name: string
}
