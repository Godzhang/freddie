import React from "react";
import ReactDOM from "react-dom";

class Child extends React.Component {
  constructor(props) {
    super(props);
    console.log("1. 构造函数");
    console.log("2. 设置状态机");
  }
  static defaultProps = {
    name: "React",
  };
  componentWillMount() {
    console.log("3. componentWillMount 完成首次渲染前调用");
  }
  componentDidMount() {
    console.log("5. componentDidMount render渲染后的操作");
  }
  componentWillReceiveProps() {
    console.log("6. 父组件更新子组件props时，调用该方法");
  }
  shouldComponentUpdate() {
    console.log("7. 决定组件props或者state的改变是否需要进行重新渲染");
    return true;
  }
  componentWillUpdate() {
    console.log("8. 当接受到新的props或state时，调用该方法");
  }
  componentDidUpdate() {
    console.log("9. 组件重新被渲染后，调用该方法");
  }
  componentWillUnmount() {
    console.log("10. 组件已被销毁");
  }
  delComponent() {
    ReactDOM.unmountComponentAtNode(document.getElementById("root"));
  }
  render() {
    console.log("4. 组件进行渲染");
    return (
      <div id="child">
        <h3>{this.props.name}</h3>
        <button onClick={this.delComponent.bind(this)}>销毁组件</button>
      </div>
    );
  }
}

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.updateChildProps = this.updateChildProps.bind(this);
    this.state = {
      name: "React",
    };
  }
  updateChildProps() {
    this.setState({
      name: "Vue",
    });
  }
  render() {
    return (
      <div id="life-cycle">
        <Child name={this.state.name}></Child>
        <button onClick={this.updateChildProps}>update child props</button>
      </div>
    );
  }
}

export default LifeCycle;
