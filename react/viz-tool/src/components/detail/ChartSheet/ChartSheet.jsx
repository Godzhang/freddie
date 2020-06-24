import React from 'react';
import './ChartSheet.less';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Input} from 'antd';
import {HotTable} from '@handsontable/react';
import {configSheetAction} from '../../../redux/actions/sheetAction';
import SheetUpload from '../../common/Upload/SheetUpload/SheetUpload';
import WordUpload from '../../common/Upload/WordUpload/WordUpload';

const maxWidth = window.screen.width * 0.5;
const minWidth = window.screen.width * 0.33;
const height = window.screen.height * 0.75;
class ChartSheet extends React.Component {
  constructor(props) {
    super(props);
    this.width = maxWidth;
    this.startX = maxWidth;
    this.isDragging = false;
    this.defaultConfigs = {
      width: '100%',
      height: height,
      minRows: 40,
      minCols: 20,
      rowHeights: 25,
      colWidths: 75,
      rowHeaders: true,
      colHeaders: true,
      columnSorting: true,
      licenseKey: 'non-commercial-and-evaluation'
    }
  }

  handleMouseDown = (e) => {
    this.startX = e.clientX;
    this.isDragging = true;
    document.addEventListener('mousemove', this.handleMouseMove);
    document.addEventListener('mouseup', this.handleMouseUp);
  };

  handleMouseMove = (e) => {
    if (!this.isDragging) return;
    let distance = e.clientX - this.startX;
    let newWidth = this.width - distance;
    if (newWidth >= maxWidth) {
      newWidth = maxWidth;
    }
    if (newWidth <= minWidth) {
      newWidth = minWidth;
    }
    this.refs.dragWrapper.style.width = newWidth + 'px';
    this.width = newWidth;
    this.startX = e.clientX;
  };

  handleMouseUp = () => {
    this.isDragging = false;
    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mouseup', this.handleMouseUp);
  };

  onBeforeHotChange = (changes) => {
    let { actions } = this.props;
    actions.updateSheetData(changes)
    return false;
  }

  render() {
    console.log('match', this.props.match)
    const chartType = {
      name: 'DynamicBarChart',
      type: 'dynamic'
    }
    let MyUpload = null
    if (chartType !== 'WordCloud') {
      MyUpload = <SheetUpload chart={chartType}/>
    } else {
      MyUpload = <WordUpload chart={chartType}/>
    }
    let { sheet } = this.props;
    let defaultSettings = {
      ...this.defaultConfigs,
      data: sheet.sheetData
    };

    return (
      <div
        ref="dragWrapper"
        className="g-spreadsheet"
        style={{width: this.width}}
      >
        <div className="title">
          <span>设置标题：</span>
          <Input></Input>
        </div>
        <div className="sample">
          {MyUpload}
        </div>
        <div className="drag" onMouseDown={this.handleMouseDown}></div>
        <div className="hot">
          <HotTable ref="hot" beforeChange={this.onBeforeHotChange} settings={defaultSettings} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    sheet: state.sheetReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(configSheetAction, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChartSheet);
