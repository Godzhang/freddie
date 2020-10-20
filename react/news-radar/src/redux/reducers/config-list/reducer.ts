import { ConfigListStructure, LocationMapStructure } from "@/types/redux";

const configList = {};

type ActionTypes = "UPDATE_CONFIG_LIST";
interface ActionStructure {
  type: ActionTypes;
  config: ConfigListStructure;
}

export default (state = configList, action: ActionStructure) => {
  switch (action.type) {
    case "UPDATE_CONFIG_LIST":
      const { config } = action;
      const { locationList } = config;
      const locationMap: LocationMapStructure = {};
      locationList.forEach((item) => (locationMap[item.key] = item.value));
      config.locationMap = locationMap;
      return config;
    default:
      return state;
  }
};
