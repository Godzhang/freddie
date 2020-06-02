import React, { useState, useEffect } from "react";

function Example() {
  const [count, setCount] = useState(5);

  useEffect(() => {
    document.title = `you click ${count} times`;
  });

  return (
    <div>
      <h3>you click {count} times</h3>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
}

export default Example;

// class Hook extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//     this.clickBtn = this.clickBtn.bind(this);
//   }
//   clickBtn() {
//     this.setState((prevState) => ({
//       count: prevState.count + 1,
//     }));
//   }
//   render() {
//     return (
//       <div>
//         <h3>{this.state.count}</h3>
//         <button onClick={this.clickBtn}>click</button>
//       </div>
//     );
//   }
// }

// export default Hook;
