import { ConfigListStructure } from "@/types/redux";

export default {
  updateConfigList: (config: ConfigListStructure) => ({
    type: "UPDATE_CONFIG_LIST",
    config,
  }),
};
