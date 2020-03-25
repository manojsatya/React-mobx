import React from "react";
import { observer, Observer } from "mobx-react";

const todo = observer(({ context }) => {
  var { person, addTodo } = context;

  const handleChange = event => {
    person.name = event.target.value;
  };

  const handleSubmit = () => {
    console.log(person.name);
    addTodo(person.name);
    console.log("todo", person.todo[3]);
  };

  // console.log(todo);
  return (
    <div style={{ maxWidth: "200px", margin: "auto" }}>
      <h1>Todo List</h1>
      {/* <Observer>{() => */}
      <div>{person.name}</div>
      {/* }</Observer> */}
      <div>{person.count}</div>
      <input name="input" value={person.name} onChange={handleChange} />
      <button onClick={() => person.count++}>click</button>
      <button onClick={handleSubmit}>Submit</button>
      {/* <TodoList todo={todo} /> */}
    </div>
  );
});

export default todo;
