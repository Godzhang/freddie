import { ConfigListStructure } from "@/types/redux";
import { NavStructure } from "@/common/global/nav";

export const fillConfigListToTreeData = (
  list: NavStructure[],
  result: ConfigListStructure
) => {
  const { locationList, topicList, websiteList } = result;
  list.forEach((listItem, itemIndex) => {
    const newLocationList = locationList.map((item) => {
      const res = { ...item };
      res.title = item.value;
      delete res.value;
      return res;
    });
    const newTopicList = topicList.map((item) => {
      const res = { ...item };
      res.title = item.value;
      delete res.value;
      return res;
    });
    const newWebsiteList = websiteList.map((web, i) => ({
      key: `${i}`,
      title: web,
    }));
    //@ts-ignore
    listItem.children![0].children = [...newTopicList];
    //@ts-ignore
    listItem.children![1].children = [...newLocationList];
    if (itemIndex === 0) {
      listItem.children![2].children![0].children = [...newWebsiteList];
    }
  });
};
