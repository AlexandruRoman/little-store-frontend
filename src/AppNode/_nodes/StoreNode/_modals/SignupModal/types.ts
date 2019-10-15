import { closeModal } from "../../../../_brain/modals/actions";
import { signupAction } from "../../../../_brain/auth/actions";
import { pressButtonAction } from "../../../../_brain/analytics/actions";

export interface OwnProps {
}

export interface StateProps {
}

export interface DispatchProps {
    signupAction: typeof signupAction
    closeModalAction: typeof closeModal
    pressButton: typeof pressButtonAction
}

export type Props = StateProps & DispatchProps & OwnProps

export interface State {
    name: string
    email: string
    password: string
}
