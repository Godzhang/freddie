import React from "react";
import "./ChartTemplates.less";
import Header from "../../components/common/Header/Header";
import ChartTab from "../../components/chartTemplates/ChartTab/ChartTab.jsx";
import Charts from "../../components/chartTemplates/Charts/Charts.jsx";
import { ChartsType } from '../../common/global/charts'

class ChartTemplates extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      filters: {
        type: 'all',
        scene: 'all',
        keywords: ''
      },
      charts: ChartsType
    }
  }

  changeFilters = ({ type, scene, keyWords }) => {
    let typefilters = type.type !== 'all'
      ? ChartsType.filter(item => item._type === type.type)
      : ChartsType
    this.setState({ charts: typefilters })
  }

  render() {
    return (
      <div className="chart-templates">
        <Header path={this.props.match.path} />
        <div style={{ width: "1280px", margin: "20px auto" }}>
          <ChartTab
            filters={this.state.filters}
            changeFilters={this.changeFilters}
          />
          <div style={{ marginTop: "25px" }}>
            <Charts charts={this.state.charts} />
          </div>
        </div>
      </div>
    );
  }
}

export default ChartTemplates;
