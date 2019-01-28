import { runtimeConfig } from "../../../runtimeConfig";
import { loadConfigurationAction } from "./internalActionCreators/loadConfiguration";
import { ConfigurationClient } from "../../../_shared/api/client/ConfigurationClient";


const client = new ConfigurationClient({apiEndpoint: runtimeConfig.mobileManagerApi});

export const loadConfiguration = loadConfigurationAction(client);
