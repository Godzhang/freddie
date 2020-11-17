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

function App() {
  const inputEl = useRef(null);
  console.log(inputEl.current);
  const plus = () => {
    const { value, setValue } = inputEl.current;
    setValue(value + 1);
  };
  return (
    <div>
      <Child ref={inputEl}></Child>
      <div>{inputEl.current && inputEl.current.name}</div>
      <button onClick={() => plus()}>累加子组件value</button>
    </div>
  );
}

const Child = forwardRef((props, ref) => {
  const inputRef = useRef();
  const [value, setValue] = useState(0);

  useImperativeHandle(ref, () => ({
    setValue,
    value,
  }));

  return (
    <>
      <div>child-value: {value}</div>
      <input ref={inputRef} />
    </>
  );
});

export default App;
