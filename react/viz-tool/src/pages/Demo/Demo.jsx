import React from "react";
import Header from "../../components/common/Header/Header";
import ChartTab from "../../components/chartTemplates/ChartTab/ChartTab.jsx";
import Charts from "../../components/chartTemplates/Charts/Charts.jsx";
import { Row, Col } from "antd";

// templates
// class Demo extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       filters: { type: "all", scene: "all", keyWords: "" },
//       charts: [],
//     };
//   }
//   changeFilters({ type, scene, keyWords }) {}
//   render() {
//     return (
//       <div className="demo-page">
//         <Header path={this.props.match.path} />
//         <div style={{ width: "1280px", margin: "20px auto" }}>
//           <ChartTab
//             filters={this.state.filters}
//             changeFilters={this.changeFilters.bind(this)}
//           />
//           <div style={{ marginTop: "25px" }}>
//             <Charts charts={this.state.charts} />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default Demo;

// details
class Demo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="demo-page">
        <Header path="/detail" />
        <Row>
          <Col span={16}>1</Col>
          <Col span={8}></Col>
        </Row>
      </div>
    );
  }
}

export default Demo;
