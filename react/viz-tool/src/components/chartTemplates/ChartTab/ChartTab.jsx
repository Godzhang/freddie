import React from "react";
import { Tabs, Input } from "antd";
import "./ChartTab.less";

const { TabPane } = Tabs;
const { Search } = Input;

const types = [
  { name: "全部", type: "all" },
  { name: "动态图", type: "dynamic" },
  { name: "饼图", type: "pie" },
  { name: "折线图", type: "line" },
  { name: "柱状图", type: "column" },
  { name: "条形图", type: "bar" },
  { name: "面积图", type: "area" },
  { name: "其他", type: "other" }
];

class TabItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { typeIdx: 0 };
  }
  changeChartType(typeIdx, item) {
    this.setState({
      typeIdx,
    });
    this.props.handClickTab(item)
  }
  render() {
    return (
      <div className="type-list">
        {this.props.list.map((item, index) => (
          <a
            className={index === this.state.typeIdx ? "active" : ""}
            onClick={() => this.changeChartType(index, item)}
            key={item.type}
          >
            {item.name}
          </a>
        ))}
      </div>
    );
  }
}

class ChartTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = { keyWords: "" };
  }

  handClickTab = (type) => {
    this.props.changeFilters({type})
  }
  render() {
    return (
      <div className="chart-tab">
        <Tabs defaultActiveKey="type" size="large">
          <TabPane tab="图表类型" key="type">
            <TabItem list={types} handClickTab={this.handClickTab}/>
          </TabPane>
          <TabPane tab="使用场景" key="scene">
            {/* <TabItem list={types} /> */}
            敬请期待中
          </TabPane>
        </Tabs>
        <Search className="search" />
      </div>
    );
  }
}

export default ChartTab;
