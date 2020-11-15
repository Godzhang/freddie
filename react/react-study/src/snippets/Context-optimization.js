import React, { createContext, useContext, useState, useCallback } from "react";
import "./App.css";

const LogDispatchContext = createContext();
const LogStateContext = createContext();

// 组合多个Provider，使用时子组件还是都会渲染一遍，暂时有问题...
const composeProvider = (...providers) => {
  return ({ children }) => {
    return providers.reduce(
      (prev, [Provider, value]) => <Provider value={value}>{prev}</Provider>,
      children
    );
  };
};

const useLogState = () => {
  const context = useContext(LogStateContext);
  // 注意错误处理
  if (context === undefined) {
    throw new Error("useLogState must be used within a LogStateProvider");
  }
  return context;
};
const useLogDispatch = () => {
  const context = useContext(LogDispatchContext);
  if (context === undefined) {
    throw new Error("useLogDispatch must be used within a LogDispatchContext");
  }
  return context;
};

const useLogs = () => {
  return [useLogState(), useLogDispatch()];
};

const LogProvider = ({ children }) => {
  const [logs, setLogs] = useState([]);
  const addLog = useCallback(
    (log) => setLogs((prevLogs) => [...prevLogs, log]),
    []
  );
  // some problems
  // const StateProvider = composeProvider(
  //   [LogStateContext.Provider, logs],
  //   [LogDispatchContext.Provider, addLog]
  // );
  return (
    // context 读写分离
    // 提升渲染无关的子组件元素到【有状态】组件的外部
    <LogDispatchContext.Provider value={addLog}>
      <LogStateContext.Provider value={logs}>
        {children}
      </LogStateContext.Provider>
    </LogDispatchContext.Provider>
  );
};

const Logger1 = () => {
  const addLog = useLogDispatch();
  console.log("logger1 render");
  return (
    <>
      <p>一个能发日志的组件-1</p>
      <button onClick={() => addLog("logger1")}>发日志</button>
    </>
  );
};

const Logger2 = () => {
  const addLog = useLogDispatch();
  console.log("logger2 render");
  return (
    <>
      <p>一个能发日志的组件-2</p>
      <button onClick={() => addLog("logger2")}>发日志</button>
    </>
  );
};

const LogsPannel = () => {
  const logs = useLogState();
  return logs.map((log, index) => <p key={index}>{log}</p>);
};

function App() {
  return (
    <LogProvider>
      <Logger1></Logger1>
      <Logger2></Logger2>
      <LogsPannel></LogsPannel>
    </LogProvider>
  );
}

export default App;
