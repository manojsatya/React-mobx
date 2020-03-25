import React, { useContext } from "react";
import { observer } from "mobx-react";

import "./App.css";
import Todo from "./components/Todo/Todo";
import store from "./store/TodoStore";
import Counter from "./components/Counter";

const App = observer(() => {
  const context = useContext(store);
  var { person, todo } = context;
  return (
    <div className="App">
      <Todo person={person} todo={todo} context={context} />
      {/* <Counter person={person} /> */}
    </div>
  );
});

export default App;
