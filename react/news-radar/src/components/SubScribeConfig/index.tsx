import React, { FC, useState, useEffect } from "react";
import { Drawer } from "antd";
import { DrawerProps } from "antd/lib/drawer";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import configAction from "@/redux/actions/config-list/action";
import { getSubList, getConfigList, SaveSubData } from "@/common/api/subscribe";
import subscribeList, { SubStructure } from "@/common/global/subscribeList";
import SelectButton from "../libs/SelectButton/index";
import {
  fillResultToSubscribeList,
  backFillSelectedTag,
  filterSelectedKeys,
} from "./util";
import { IStoreState, ConfigListStructure } from "@/types/redux";
import "./index.scss";

interface SubScribeConfigProps extends DrawerProps {
  onSave: (keys: SaveSubData[]) => void;
}

// 已选项回填
const SubScribeConfig: FC<SubScribeConfigProps & IStoreState> = (props) => {
  const { onSave, configList, ...restProps } = props;
  const [subscriptionList, setSubscriptionList] = useState(subscribeList);

  useEffect(() => {
    Promise.all([getSubList()]).then(([subRes]) => {
      // const selectedTags = subRes.data.result;
      // fillResultToSubscribeList(subscriptionList, configRes.data.result);
      // setSubscriptionList([...subscriptionList]);
    });
  }, []);

  useEffect(() => {
    const { configList } = props;
    if (JSON.stringify(configList) !== "{}") {
      fillResultToSubscribeList(
        subscriptionList,
        configList as ConfigListStructure
      );
      setSubscriptionList([...subscriptionList]);
    }
  }, [props.configList]);

  const updateSubList = () => {
    setSubscriptionList([...subscriptionList]);
  };

  const closeDrawer = () => {
    const selectedKeys = filterSelectedKeys(subscriptionList);
    onSave(selectedKeys);
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
                    selected?: boolean;
                  }[]).map((s, si) => (
                    //@ts-ignore
                    <SelectButton info={s} key={si} update={updateSubList}>
                      {s.value}
                    </SelectButton>
                  ))}
                {sub.children &&
                  sub.children.map((child, childIndex) => (
                    <SelectButton
                      key={childIndex}
                      info={child}
                      type="multiple"
                      update={updateSubList}
                    >
                      {child.title}
                    </SelectButton>
                  ))}
              </div>
            </div>
          ))}
        </div>
      ))}
    </Drawer>
  );
};

const mapStateToProps = (state: IStoreState) => ({
  configList: state.configList,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  actions: bindActionCreators(configAction, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(SubScribeConfig);
