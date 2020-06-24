import React from 'react';
import './WordUpload.less';
import {Menu, Dropdown, Button, Tooltip,Modal} from 'antd';
import { DownOutlined } from '@ant-design/icons';
import {sheetGuide} from '../../../../common/global/guide';

const ItemLists = [
  '粘贴文本',
  '上传txt',
  '上传doc/docx',
  '上传pdf',
  '上传文件夹 ',
  '抽取网站内容'
];
class WordUpload extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ModalText: 'Content of the modal',
      visible: false
    }
  }

  handleMenuClick = (params) => {
    this.setState({
      visible: true,
      ModalText: params.item.props.children[1]
    })
  }

  handleCancel = () => {
    this.setState({
      visible: false
    })
  }

  render() {
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        { ItemLists.map((item, index) => 
          <Menu.Item key={index}>{item}</Menu.Item>
        )}
      </Menu>
    );

    return (
      <div className="upload-wrapper">
        <Dropdown overlay={menu}>
          <Button>上传文件<DownOutlined/></Button>
        </Dropdown>
        <Tooltip placement="bottom" title={sheetGuide} color="#fb5">
          <span className="guide" size="small">
            数据使用引导
          </span>
        </Tooltip>
        <Modal
          title={this.state.ModalText}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          footer={null}>
          <div>this is modal body</div>
        </Modal>
      </div>
    );
  }
}

export default WordUpload;
