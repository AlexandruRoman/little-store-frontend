import { gotoStaffExport, gotoStaffImport } from './../../../../../_brain/router/actions';
export interface OwnProps {
}

export interface StateProps {
}

export interface DispatchProps {
    gotoStaffExport: typeof gotoStaffExport
    gotoStaffImport: typeof gotoStaffImport
}

export type Props = StateProps & DispatchProps & OwnProps

export interface State {
}
