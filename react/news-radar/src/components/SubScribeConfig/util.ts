import { ConfigListStructure } from "@/types/redux";
import { SubScribeStructure } from "@/common/global/subscribeList";

interface SubItemStructure {
  id: number;
  info?: any;
  subId: number;
  subTypeId: number;
  typeId: number;
  updateTime: number;
  userId: string;
}

export const fillResultToSubscribeList = (
  list: SubScribeStructure[],
  result: ConfigListStructure
) => {
  const { locationList, topicList, websiteList } = result;
  list.forEach((item, itemIndex) => {
    const newLocationList = locationList.map((item) => {
      item.disabled = false;
      return { ...item };
    });
    const newTopicList = topicList.map((item) => {
      item.disabled = false;
      return { ...item };
    });
    const newWebsiteList = websiteList.map((web, i) => ({
      key: `${i}`,
      value: web,
      disabled: false,
    }));
    item.children![0].sub = [...newTopicList];
    item.children![1].sub = [...newLocationList];
    if (itemIndex === 0) {
      item.children![2].children![0].sub = [...newWebsiteList];
    }
  });
};

export const backFillSelectedTag = (
  list: SubScribeStructure[],
  selectedTags: SubItemStructure[]
) => {};
