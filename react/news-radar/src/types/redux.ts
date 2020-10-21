export type LocationTopicStructure = {
  title?: string;
  value: string;
  disabled?: boolean;
  key: string;
};
export type LocationMapStructure = { [key: string]: string };
export interface ConfigListStructure {
  locationList: LocationTopicStructure[];
  locationMap: LocationMapStructure;
  topicList: LocationTopicStructure[];
  websiteList: string[];
}

export interface IStoreState {
  configList?: ConfigListStructure;
}
