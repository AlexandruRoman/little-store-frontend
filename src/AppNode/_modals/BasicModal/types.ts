import { closeModal } from "../../_brain/modals/actions";

export interface OwnProps {
    id: string
}

export interface StateProps {
    stateId: string
}

export interface DispatchProps {
    closeModal: typeof closeModal
}

export type Props = StateProps & DispatchProps & OwnProps

export interface State {
}
