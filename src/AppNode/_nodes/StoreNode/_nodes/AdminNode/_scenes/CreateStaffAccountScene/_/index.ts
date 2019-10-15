import { StateProps, DispatchProps, OwnProps } from "./types"
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "./redux"
import component from "./component"

const CreateStaffAccountScene = connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(component)

export default CreateStaffAccountScene
