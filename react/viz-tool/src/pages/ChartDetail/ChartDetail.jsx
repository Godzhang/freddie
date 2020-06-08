import React from "react";
import Header from "../../components/common/Header/Header";
import ChartDisplay from "../../components/detail/ChartDisplay/ChartDisplay";
import ChartConfig from "../../components/detail/ChartConfig/ChartConfig";
import "./ChartDetail.scss";
import { connect } from "react-redux";

// https://org.modao.cc/app/288676a5a84e0ac39833e6fb4b6c4cdeeb675ed1?simulator_type=device&sticky=#screen=skaxtc6nca1gs4p
class ChartDetail extends React.Component {
  constructor(props) {
    super(props);
    this.chartType = this.props.match.params.type;
    // this.chartConfig = null;
  }
  async componentDidMount() {
    // const { default: chartConfig } = await import(
    //   `../../common/config/${this.chartType}.js`
    // );
    // this.chartConfig = chartConfig;
  }
  render() {
    return (
      <div className="chart-detail">
        <Header path={this.props.match.url} />
        <div className="wrapper">
          <div className="display">
            <ChartDisplay />
          </div>
          <div className="setting">
            <ChartConfig />
          </div>
        </div>
      </div>
    );
  }
}

export default ChartDetail;

// const mapStateToProps = (state) => ({
//   chartConfig: state.chartConfig,
// });

// export default connect(mapStateToProps)(ChartDetail);
