import * as React from "react";
import { connect } from "react-redux";
import { IStore } from "../../../_shared/models/IStore";
import { Configuration, IConfigurationCallbackProps, IConfigurationDataProps } from "../components/Configuration";
import { Dispatch } from "../../../!types/Dispatcher";
import { loadConfiguration } from "../actionCreators/publicActionCreator";

function mapStateToProps(store: IStore): IConfigurationDataProps {
  return {
    configuration: store.configurationStore.managerConfguration
  }
}

function mapDispatchToProps(dispatch: Dispatch): IConfigurationCallbackProps {
  return {
    loadConfig: () => dispatch(loadConfiguration())
  }
}

const ConfigurationContainer: React.ComponentClass = connect(mapStateToProps, mapDispatchToProps)(Configuration);
export { ConfigurationContainer as Configuration };
