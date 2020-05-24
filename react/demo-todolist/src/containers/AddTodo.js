import React from "react";
import { connect } from "react-redux";
import { addTodo } from "../actions";

const AddTodo = ({ dispatch }) => {
  let input;
  return (
    <div>
      <h3>todolist</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (!input.value.trim()) return;
          dispatch(addTodo(input.value));
          input.value = "";
        }}
      >
        <input ref={(node) => (input = node)} />
        <br />
        <button type="submit">新增任务项</button>
      </form>
    </div>
  );
};

export default connect()(AddTodo);
