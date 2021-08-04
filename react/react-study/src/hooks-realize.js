import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import App from "./App";

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// );
let memoizedState = [];
let cursor = 0;

// const setFuncs = [];
// const asyncTrigger = () => {
//   setFuncs = [];
// };

const isDef = (val) => typeof val !== "undefined" && val !== null;

function useMyState(initialValue) {
  memoizedState[cursor] = isDef(memoizedState[cursor])
    ? memoizedState[cursor]
    : initialValue;
  const currentCursor = cursor;
  const setState = (value) => {
    memoizedState[currentCursor] = value;
    render();
  };
  return [memoizedState[cursor++], setState];
}

function useMyEffect(callback, depArray) {
  const hasNoDeps = !depArray;
  const deps = memoizedState[cursor];
  const hasChangedDeps = deps
    ? !depArray.every((el, i) => el === deps[i])
    : true;
  if (hasNoDeps || hasChangedDeps) {
    callback();
    memoizedState[cursor] = depArray;
  }
  cursor++;
}

const App = () => {
  const [count, setCount] = useMyState(0);
  const [name, setName] = useMyState(`${Math.random()}`);

  useMyEffect(() => {
    // console.log(count);
    // setName(`${Math.random()}`);
  }, [count]);
  // useMyEffect(() => {
  //   console.log(name);
  // }, [name]);

  return (
    <div>
      <div>{count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        set count
      </button>
      <hr />
      <div>{name}</div>
      <button
        onClick={() => {
          setName(`${Math.random()}`);
        }}
      >
        set name
      </button>
    </div>
  );
};

function render() {
  cursor = 0;
  ReactDOM.render(<App />, document.getElementById("root"));
}
render();
