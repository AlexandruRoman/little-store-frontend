import { StateProps, DispatchProps, OwnProps } from "./types";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "./redux";
import AppNode from "./component";


export default connect<StateProps, DispatchProps, OwnProps>(mapStateToProps, mapDispatchToProps)(AppNode)
