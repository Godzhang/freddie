import React, { FC, useState, useEffect } from "react";
import { Drawer } from "antd";
import { DrawerProps } from "antd/lib/drawer";
import {
  getSubList,
  getConfigList,
  ConfigResponseData,
} from "@/common/api/subscribe";
import subscribeList, {
  SubScribeStructure,
} from "@/common/global/subscribeList";
import SelectButton from "../libs/SelectButton/index";
import { fillResultToSubscribeList, backFillSelectedTag } from "./util";
import "./index.scss";

interface SubScribeConfigProps extends DrawerProps {
  onSave: () => void;
}

const SubScribeConfig: FC<SubScribeConfigProps> = (props) => {
  const { onSave, ...restProps } = props;
  const [subscriptionList, setSubscriptionList] = useState(subscribeList);

  useEffect(() => {
    Promise.all([getSubList(), getConfigList()]).then(([subRes, configRes]) => {
      // const selectedTags = subRes.data.result;

      fillResultToSubscribeList(subscriptionList, configRes.data.result);
      // console.log(subscriptionList);
      // backFillSelectedTag(subscriptionList, selectedTags);
      setSubscriptionList([...subscriptionList]);
    });
  }, []);

  const updateSubList = () => {
    setSubscriptionList([...subscriptionList]);
  };

  const getSelectedKeys = () => {
    console.log(subscriptionList);
  };

  const closeDrawer = () => {
    const selectedKeys = getSelectedKeys();
    onSave();
  };

  return (
    <Drawer
      className="subscribe-drawer"
      title="Subscribe"
      closable={true}
      width={580}
      onClose={() => closeDrawer()}
      {...restProps}
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
