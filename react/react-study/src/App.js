import React, { createRef, useEffect, useState } from "react";
import "./App.css";

// const LazyComponent = lazy(() => import("./components/LazyComponent"))

const App = () => {
  return (
    <div className="app">
      <Mouse render={(pos) => <ShowPos pos={pos} />}></Mouse>
    </div>
  );
};

const ShowPos = (props) => {
  const pos = props.pos;
  return (
    <p>
      The current mouse position is ({pos.x}, {pos.y})
    </p>
  );
};

const Mouse = (props) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onHandleMouseMove = (e) => {
    setPos({
      x: e.clientX,
      y: e.clientY,
    });
  };

  return (
    <div
      style={{ width: "100%", height: "100%" }}
      onMouseMove={onHandleMouseMove}
    >
      {props.render(pos)}
      {/* <p>
        The current mouse position is ({pos.x}, {pos.y})
      </p> */}
    </div>
  );
};

export default App;
