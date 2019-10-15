import { loginAction } from "../../../../_brain/auth/actions";
import { closeModal } from "../../../../_brain/modals/actions";
import { pressButtonAction } from "../../../../_brain/analytics/actions";

export interface OwnProps {
}

export interface StateProps {
}

export interface DispatchProps {
    loginAction: typeof loginAction
    closeModalAction: typeof closeModal
    pressButton: typeof pressButtonAction
}

export type Props = StateProps & DispatchProps & OwnProps

export interface State {
    email: string
    password: string
}
