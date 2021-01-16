import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  useReducer,
  forwardRef,
  useEffect,
  useRef,
  useImperativeHandle,
} from "react";
import "./App.css";

const Child = (props) => {
  if (props.name === "zhangqi") return null;
  return <div>{props.name}</div>;
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "zhangqi",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ name: "aaa" });
    }, 2000);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log(nextProps, nextState);
  //   if (nextState.name === "zhangqi") return false;
  //   return true;
  // }

  setName(name) {
    this.setState({ name });
  }

  render() {
    return (
      <div>
        <Child name={this.state.name} />
        <button onClick={() => this.setName("aaa")}>aaa</button>
        <button onClick={() => this.setName("bbb")}>bbb</button>
      </div>
    );
  }
}

export default App;
