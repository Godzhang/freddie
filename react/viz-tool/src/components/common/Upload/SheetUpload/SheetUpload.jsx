import React from 'react';
import './SheetUpload.less';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {configSheetAction} from '../../../../redux/actions/sheetAction';
import {Upload, Button, Tooltip, message} from 'antd';
import {sheetGuide} from '../../../../common/global/guide';

class SheetUpload extends React.Component {
  constructor(props) {
    super(props);
    this.chart = this.props.chart;
  }

  render() {
    const url = require(`../../../charts/${this.chart.type}/${this.chart.name}/${this.chart.name}.xlsx`);
    const { actions } = this.props
    const params = {
      name: 'file',
      action: '/vnt/api/data/excel',
      onChange(info) {
        if (info.file.status !== 'uploading') {
          console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
          const res = info.fileList[info.fileList.length - 1]
          if (res.response.code !== 200) { 
            message.error(`${res.response.message}`);
            return
          }
          const newsheet = res.response.data.mainBody
          actions.setSheetData(newsheet)
          message.success(`${info.file.name} 上传成功~`);
        } else if (info.file.status === 'error') {
          message.error(`${info.file.name} 上传失败！`);
        }
      }
    };
    return (
      <div className="upload-wrapper">
        <div className="upload">
          <Upload {...params} accept=".xls,.xlsx">
            <Button>上传数据</Button>
          </Upload>
        </div>
        <div className="download">
          <Button>
            <a href={url} download>
              下载样例数据
            </a>
          </Button>
          <Tooltip placement="bottom" title={sheetGuide} color="#fb5">
            <span className="guide" size="small">
              数据使用引导
            </span>
          </Tooltip>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(configSheetAction, dispatch),
  };
};
export default connect(null, mapDispatchToProps)(SheetUpload);
