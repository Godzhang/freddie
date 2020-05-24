import React from "react";
import Footer from "./Footer";
import AddToDo from "../containers/AddTodo";
import VisibleTodoList from "../containers/VisibleTodoList";

const App = (
  <div>
    <AddToDo></AddToDo>
    <VisibleTodoList></VisibleTodoList>
    <Footer></Footer>
  </div>
);

export default App;
