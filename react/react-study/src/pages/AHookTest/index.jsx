import React, { useState } from "react";
import { useRequest, useDebounceFn, useBoolean } from "ahooks";

const url = "https://gank.io/api/v2/categories/GanHuo";

const AHookTest = () => {
  const [value, setValue] = useState("");
  const [isLeading, { toggle }] = useBoolean(false);
  const { run: onChange } = useDebounceFn(
    (e) => {
      setValue(e.target.value);
    },
    {
      wait: 500,
      leading: isLeading,
      trailing: !isLeading,
    }
  );

  return (
    <div className="hook-test">
      <input onChange={onChange} />
      <button onClick={() => toggle()}>
        {isLeading ? "上升沿" : "下降沿"}
      </button>
      <div>{value}</div>
    </div>
  );
};

// const url = "https://gank.io/api/v2/categories/GanHuo";

// const getCategories = () => {
//   return fetch(url).then((res) => res.json());
// };
// const getFn = () => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ status: 100, data: [] });
//     }, 2000);
//   });
// };

// const AHookTest = () => {
//   const [list, setList] = useState([]);
//   const { run, error, loading } = useRequest(getFn, {
//     manual: true,
//     onSuccess: (result, params) => {
//       if (result.status === 100) {
//         setList(result.data);
//       }
//     },
//   });

//   const renderList = () => {
//     if (loading) return <div>loading...</div>;

//     if (error) return <div>{error.message}</div>;

//     return (
//       <>
//         <div>success</div>
//         <ul>
//           {list.map((item) => (
//             <li key={item._id}>{item.title}</li>
//           ))}
//         </ul>
//       </>
//     );
//   };

//   const handleRequest = () => {
//     run();
//   };

//   return (
//     <div className="app">
//       <button onClick={handleRequest}>post request</button>
//       <div style={{ padding: "20px", border: "1px solid #999" }}>
//         {renderList()}
//       </div>
//     </div>
//   );
// };

export default AHookTest;
