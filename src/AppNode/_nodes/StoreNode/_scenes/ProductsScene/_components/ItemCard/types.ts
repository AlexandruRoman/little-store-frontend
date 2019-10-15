export interface OwnProps {
    title: string
    subtitle: string
    img: string
    price: string
    details: string
    firstButton: string
    secondButton: string
    onView: () => void
    onAdd: () => void
}

export interface StateProps {
}

export interface DispatchProps {
}

export type Props = StateProps & DispatchProps & OwnProps

export interface State {
}