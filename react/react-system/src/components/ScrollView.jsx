import { Component, createElement } from "react";
import { debounce } from "../utils/utils";

class ScrollView extends Component {
  /* -----自定义事件---- */
  /* 控制滚动条滚动 */
  handleScroll = (e) => {
    const { scroll } = this.props;
    scroll && scroll(e);
    this.handleScrolltolower();
  };
  /* 判断滚动条是否到底部 */
  handleScrolltolower() {
    const { scrolltolower } = this.props;
    const { scrollHeight, scrollTop, offsetHeight } = this.node;
    if (scrollHeight === scrollTop + offsetHeight) {
      scrolltolower && scrolltolower();
    }
  }

  node = null;
  /* ---——---生命周期------- */
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
    this.handleScrolltolower = debounce(this.handleScrolltolower, 200);
  }
  /* 接收props, 合并到state */
  static getDerivedStateFromProps(newProps) {
    const { data } = newProps;
    return {
      list: data.list || [],
    };
  }
  /* 性能优化，只有列表数据变化，渲染列表 */
  shouldComponentUpdate(newProps, newState) {
    return newState.list !== this.state.list;
  }
  /* 获取更新前容器高度 */
  getSnapshotBeforeUpdate() {
    return this.node.scrollHeight;
  }
  /* 获取更新后容器高度 */
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("scrollview容器高度变化: ", this.node.scrollHeight - snapshot);
  }
  /* 绑定事件监听器 - 监听scorll事件 */
  componentDidMount() {
    this.node.addEventListener("scroll", this.handleScroll);
  }
  /* 解绑事件监听器 */
  componentWillUnmount() {
    this.node.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    const { list } = this.state;
    const { component } = this.props;
    return (
      <div ref={(node) => (this.node = node)}>
        <div>
          {list.map((item) => createElement(component, { item, key: item.id }))}
        </div>
      </div>
    );
  }
}

export default ScrollView;
