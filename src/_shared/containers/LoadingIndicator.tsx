import { IStore } from "../models/IStore";
import { connect } from "react-redux";
import { ILoadingIndicatorProps, LoadingIndicator } from "../components/LoadingIndicator";

function mapStateToProps(state: IStore): ILoadingIndicatorProps {

  return {
    isLoading: state.sharedStore.loadingInProgress
  }
}

const LoadingIndicatorContainer: React.ComponentClass = connect(mapStateToProps)(LoadingIndicator);
export { LoadingIndicatorContainer as LoadingIndicator }
