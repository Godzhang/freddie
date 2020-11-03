import { ConfigListStructure } from "@/types/redux";
import { SubScribeStructure } from "@/common/global/subscribeList";
import { SaveSubData } from "@/common/api/subscribe";

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
  const {
    locationList,
    topicList,
    websiteList,
    twitterList,
    facebookList,
  } = result;
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
    const newTwitterList = twitterList.map((web, i) => ({
      key: `${i}`,
      value: web,
      disabled: false,
    }));
    const newFacebookList = facebookList.map((web, i) => ({
      key: `${i}`,
      value: web,
      disabled: false,
    }));
    item.children![0].sub = [...newTopicList];
    item.children![1].sub = [...newLocationList];
    if (itemIndex === 0) {
      item.children![2].children![0].sub = [...newWebsiteList];
      item.children![2].children![1].sub = [...newTwitterList];
      item.children![2].children![2].sub = [...newFacebookList];
    }
  });
};

export const backFillSelectedTag = (
  list: SubScribeStructure[],
  selectedTags: SubItemStructure[]
) => {};

export const filterSelectedKeys = (list: SubScribeStructure[]) => {
  const result = [];
  for (let oneIndex = 0; oneIndex < list.length; oneIndex++) {
    const onelevel = list[oneIndex];
    if (onelevel.selected) {
      result.push({ typeId: oneIndex });
    } else if (onelevel.children) {
      for (let twoIndex = 0; twoIndex < onelevel.children.length; twoIndex++) {
        const twolevel = onelevel.children[twoIndex];
        if (twolevel.selected) {
          result.push({
            typeId: oneIndex,
            subTypeId: twoIndex,
          });
        } else if (twolevel.children) {
          for (
            let threeIndex = 0;
            threeIndex < twolevel.children.length;
            threeIndex++
          ) {
            const threelevel = twolevel.children[threeIndex];
            if (threelevel.selected) {
              threelevel.sub!.forEach((sub) => {
                if (sub.selected) {
                  result.push({
                    typeId: oneIndex,
                    subTypeId: twoIndex,
                    subId: threeIndex,
                    info: sub.value,
                  });
                }
              });
            }
          }
        } else if (twolevel.sub) {
          twolevel.sub.forEach((item, itemIndex) => {
            if (item.selected) {
              result.push({
                typeId: oneIndex,
                subTypeId: twoIndex,
                subId: itemIndex,
              });
            }
          });
        }
      }
    }
  }
  return result as SaveSubData[];
};
