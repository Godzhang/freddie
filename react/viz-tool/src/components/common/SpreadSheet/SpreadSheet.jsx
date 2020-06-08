import React from 'react';
import './SpreadSheet.scss';
import { Input, Button, Tooltip } from 'antd';
import { sheetGuide } from '../../../common/global/guide';

const maxWidth = window.screen.width * 0.5;
const minWidth = window.screen.width * 0.33;
const height = window.screen.height * 0.75;
class SpreadSheet extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      width: maxWidth
    }
  }

  /**
   * TODO:
   * 1. dataItemToSheetdata
   * 2. sheetdataToDataItem
   * 3. upload、download
   */

  handleMouseDown = (e) => {
    e.persist()
    let lastX = e.clientX
    let dragE = document.querySelector('.g-spreadsheet')
    const handleMove = (ev) => {
      if (ev.buttons === 0) {
        dragE.removeEventListener('mousemove', handleMove)
      } else {
        let dist = ev.clientX - lastX
        let newWidth = this.state.width - dist
        if (newWidth >= maxWidth) {
          this.setState({ width: maxWidth })
          return;
        }
        if (newWidth <= minWidth) {
          this.setState({ width: minWidth })
          return;
        }
        this.setState({ width: newWidth })
        lastX = ev.clientX
      }
    }
    dragE.addEventListener('mousemove', handleMove);
  }

  render() {
    return (
      <div
        className="g-spreadsheet"
        onMouseDown={this.handleMouseDown}
        style={{width: this.state.width, height: height}}>
        <div className="title">
          <span>设置标题：</span>
          <Input></Input>
        </div>
        <div className="sample">
          <Button size="small">上传数据</Button>
          <Button size="small">下载样例数据</Button>
          <Tooltip placement="bottom" title={sheetGuide} color="#fb5">
            <Button className="guide" size="small">数据使用引导</Button>
          </Tooltip>
        </div>
        <div className="drag"></div>
        <div className="sheet"></div>
      </div>
    );
  }
}

export default SpreadSheet;
