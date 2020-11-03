export type LocationTopicStructure = {
  title?: string;
  value: string;
  disabled?: boolean;
  selected?: boolean;
  key: string;
};
export type LocationMapStructure = { [key: string]: string };
export interface ConfigListStructure {
  locationList: LocationTopicStructure[];
  locationMap: LocationMapStructure;
  topicList: LocationTopicStructure[];
  websiteList: string[];
  facebookList: string[];
  twitterList: string[];
}

export interface IStoreState {
  configList?: ConfigListStructure;
}
