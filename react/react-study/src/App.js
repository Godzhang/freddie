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
  useMemo,
} from "react";
import "./App.css";

// function Example(props) {
//   const { count } = props;
//   const handleClick = () => {
//     setTimeout(() => {
//       console.log(count);
//     }, 3000);
//   };
//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={handleClick}>Alert Count</button>
//     </div>
//   );
// }

// class Example2 extends React.Component {
//   handleClick = () => {
//     setTimeout(() => {
//       console.log(this.props.count);
//     }, 3000);
//   };

//   render() {
//     return (
//       <div>
//         <h2>Example2</h2>
//         <p>{this.props.count}</p>
//         <button onClick={this.handleClick}>Alert Count</button>
//       </div>
//     );
//   }
// }

// const Example = () => {
//   const [count, setCount] = useState(0);
//   const currentCount = useRef(count);
//   currentCount.current = count;

//   const handleClick = () => {
//     setTimeout(() => {
//       setCount(currentCount.current + 1);
//       // setCount((prevCount) => prevCount + 1);
//     }, 3000);
//   };

//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={() => setCount(count + 1)}>setCount</button>
//       <button onClick={handleClick}>delay setCount</button>
//     </div>
//   );
// };

// const Example = () => {
//   const [count, setCount] = useState(1);
//   const prevCountRef = useRef(count);
//   const prevCount = prevCountRef.current;
//   prevCountRef.current = count;

//   const handleClick = () => {
//     setCount(prevCount + count);
//   };

//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={handleClick}>setCount</button>
//     </div>
//   );
// };

// const Counter = () => {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setTimeout(() => {
//       console.log(`you clicked ${count} times`);
//     }, 3000);
//   }, []);

//   return (
//     <div>
//       <p>you clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>click me</button>
//     </div>
//   );
// };

// function Example(props) {
//   const [count, setCount] = useState(0);
//   const [foo] = useState({});

//   useEffect(() => {
//     console.log("useEffect");
//   }, [foo]);

//   const main = useMemo(() => {
//     console.log("main");
//     return (
//       <ul>
//         <li>1</li>
//         <li>2</li>
//         <li>3</li>
//       </ul>
//     );
//   }, [foo]);

//   return (
//     <div>
//       <p>{count}</p>
//       <button onClick={() => setCount(count + 1)}>click</button>
//       {main}
//     </div>
//   );
// }

const Example = (props) => {
  function init(initialCount) {
    console.log(1);
    return { count: initialCount };
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      case "reset":
        return init(action.payload);
      default:
        throw new Error();
    }
  };

  const [state, dispatch] = useReducer(reducer, props.initialCount, init);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button
        onClick={() => dispatch({ type: "reset", payload: props.initialCount })}
      >
        Reset
      </button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
    </div>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="app">
        <Example initialCount={1} />
      </div>
    );
  }
}

export default App;
