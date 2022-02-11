import {
  PureComponent,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import "./App.css";
import ScrollView from "./components/ScrollView";

function App() {
  return <div className="App"></div>;
}

//#region 使用PureComponent优化渲染
// class Children extends PureComponent {
//   state = {
//     name: "zhangqi",
//     age: 30,
//     obj: {
//       number: 1,
//     },
//   };
//   changeObjNumber = () => {
//     const { obj } = this.state;
//     obj.number++;
//     this.setState({ obj }); // 同一个对象，不会触发更新
//     // this.setState({ obj: { ...obj } }); // 可以触发更新
//   };
//   render() {
//     console.log("children render");
//     return (
//       <div>
//         <div>子组件改变</div>
//         <button onClick={() => this.setState({ name: "zhangqi" })}>
//           state相同情况
//         </button>
//         <button onClick={() => this.setState({ age: this.state.age + 1 })}>
//           state不同情况
//         </button>
//         <button onClick={this.changeObjNumber}>state为引用数据类型时候</button>
//         <div>children</div>
//       </div>
//     );
//   }
// }

// const Father = () => {
//   const [n1, setN1] = useState(0);
//   const [n2, setN2] = useState(0);
//   return (
//     <div>
//       <div>父组件改变</div>
//       <button onClick={() => setN1(n1 + 1)}>改变n1</button>
//       <button onClick={() => setN2(n2 + 1)}>改变n2</button>
//       <Children number={n1} />
//     </div>
//   );
// };
//#endregion

export default App;
