import { createContext } from "react";
import { observable, decorate } from "mobx";

class TodoStore {
  person = {
    name: "manoj",
    count: 0,
    todo: []
  };

  addTodo = item => {
    this.person.todo.push(item);
  };
}

decorate(TodoStore, {
  person: observable,
  addTodo: observable
});

export default createContext(new TodoStore());
