import React from "react";
import { Tabs, Input } from "antd";
import "./ChartTab.scss";

const { TabPane } = Tabs;
const { Search } = Input;

const types = [
  { name: "全部", type: "all" },
  { name: "饼图", type: "pie" },
  { name: "线形图", type: "line" },
];

class TabItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { typeIdx: 0 };
  }
  changeChartType(typeIdx) {
    this.setState({
      typeIdx,
    });
  }
  render() {
    return (
      <div className="type-list">
        {this.props.list.map((item, index) => (
          <a
            className={index === this.state.typeIdx ? "active" : ""}
            onClick={() => this.changeChartType(index)}
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
  render() {
    return (
      <div className="chart-tab">
        <Tabs defaultActiveKey="type" size="large">
          <TabPane tab="图表类型" key="type">
            <TabItem list={types} />
          </TabPane>
          <TabPane tab="使用场景" key="scene">
            {/* <TabItem list={types} /> */}
          </TabPane>
        </Tabs>
        <Search className="search" />
      </div>
    );
  }
}

export default ChartTab;
