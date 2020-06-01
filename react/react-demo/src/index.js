import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./index.scss";
import { createStore } from "redux";
import App from "./pages/App/App";
import Chart from "./pages/Chart/Chart";
import LifeCycle from "./pages/LifeCycle/LifeCycle";

ReactDOM.render(
  <Router>
    <Route exact path="/" component={App}></Route>
    <Route path="/chart" component={Chart}></Route>
    <Route path="/lifecycle" component={LifeCycle}></Route>
  </Router>,
  document.getElementById("root")
);

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>App</h1>
//         <ul>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/inbox">Inbox</Link>
//           </li>
//           <li>
//             <Link to="/inbox/messages/30">messages</Link>
//           </li>
//         </ul>

//         <Route exact path="/about" component={About} />
//         <Route path="/inbox" component={Inbox}></Route>
//       </div>
//     );
//   }
// }
// class About extends React.Component {
//   render() {
//     return <h3>About</h3>;
//   }
// }
// class Inbox extends React.Component {
//   render() {
//     console.log(this.props);
//     return (
//       <div>
//         <h2>Inbox</h2>
//         <Route
//           path={`${this.props.match.url}/messages/:id`}
//           component={Message}
//         />
//       </div>
//     );
//   }
// }
// class Message extends React.Component {
//   constructor(props) {
//     super(props);
//     this.divRef = React.createRef();
//   }
//   linkTo() {
//     console.log(this.props);
//     console.log(this.divRef.current);
//     this.props.history.push("/about", { a: "b" });
//   }
//   render() {
//     console.log(this.props);
//     return (
//       <h3>
//         Message{" "}
//         <button ref={this.divRef} onClick={this.linkTo.bind(this)}>
//           {this.props.match.params.id}
//         </button>
//       </h3>
//     );
//   }
// }

// ReactDOM.render(
//   <Router>
//     <Route path="/" component={App}></Route>
//   </Router>,
//   document.getElementById("root")
// );

// const Counter = ({ value, onIncrement, onDecrement }) => {
//   return (
//     <div>
//       <h1>{value}</h1>
//       <button onClick={onIncrement}>+</button>
//       <button onClick={onDecrement}>-</button>
//     </div>
//   );
// };

// const reducer = (state = 0, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return state + 1;
//     case "DECREMENT":
//       return state - 1;
//     default:
//       return state;
//   }
// };

// const store = createStore(reducer);

// const render = () => {
//   ReactDOM.render(
//     <Counter
//       value={store.getState()}
//       onIncrement={() => store.dispatch({ type: "INCREMENT" })}
//       onDecrement={() => store.dispatch({ type: "DECREMENT" })}
//     />,
//     document.getElementById("root")
//   );
// };

// render();
// store.subscribe(render);
