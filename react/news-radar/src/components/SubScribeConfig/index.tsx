import React, { FC, useState, useEffect } from "react";
import { Drawer, Button, Dropdown, Menu } from "antd";
import { DrawerProps } from "antd/lib/drawer";
import { CheckOutlined, DownOutlined } from "@ant-design/icons";
import classnames from "classnames";
import { getConfigList, ConfigResponseData } from "@/common/api/subscribe";
import subscribeList, {
  SubScribeStructure,
  SubStructure,
} from "@/common/global/subscribeList";
import SelectButton from "../libs/SelectButton/index";
// import {cloneSimpleData} from '@/common/utils/utils';
import "./index.scss";

const fillResultToSubscribeList = (
  list: SubScribeStructure[],
  result: ConfigResponseData
) => {
  const { locationList, topicList, websiteList } = result;
  locationList.forEach((item) => {
    item.disabled = false;
  });
  topicList.forEach((item) => {
    item.disabled = false;
  });
  const newWebsiteList = websiteList.map((web, i) => ({
    key: `${i}`,
    value: web,
    disabled: false,
  }));
  list.forEach((item) => {
    item.children![0].sub = [...locationList];
    item.children![1].sub = [...topicList];
    item.children![2].children![0].sub = [...newWebsiteList];
  });
};

const SubScribeConfig: FC<DrawerProps> = (props) => {
  const [subscriptionList, setSubscriptionList] = useState(subscribeList);

  useEffect(() => {
    getConfigList().then((res) => {
      fillResultToSubscribeList(subscriptionList, res.data.result);
      //@ts-ignore
      console.log(
        //@ts-ignore
        subscriptionList[0].children[0].sub ===
          //@ts-ignore
          subscriptionList[1].children[0].sub
      );
      setSubscriptionList([...subscriptionList]);
    });
  }, []);

  const updateSubList = () => {
    setSubscriptionList([...subscriptionList]);
  };

  return (
    <Drawer
      className="subscribe-drawer"
      title="Subscribe"
      closable={true}
      width={580}
      {...props}
    >
      {subscriptionList.map((subList, subIndex) => (
        <div className="sub-module" key={subIndex}>
          <div className="one-level">
            <SelectButton info={subList} update={updateSubList}>
              {subList.title}
            </SelectButton>
          </div>
          {subList.children!.map((sub, sIndex) => (
            <div className="two-level" key={sIndex}>
              <div className="main">
                <SelectButton info={sub} update={updateSubList}>
                  {sub.title}
                </SelectButton>
              </div>
              <div className="branch">
                {sub.sub &&
                  (sub.sub as {
                    value: string;
                    key: string;
                  }[]).map((s, si) => (
                    <SelectButton info={s} key={si} update={updateSubList}>
                      {s.value}
                    </SelectButton>
                  ))}
                {sub.children && (
                  <SelectButton
                    info={sub.children[0]}
                    type="multiple"
                    update={updateSubList}
                  >
                    {sub.children[0].title}
                  </SelectButton>
                )}
              </div>
            </div>
          ))}
        </div>
      ))}
    </Drawer>
  );
};

export default SubScribeConfig;
