import React from "react";
import { observer } from "mobx-react";

const Counter = observer(({ person }) => {
  return (
    <div>
      <p>from counter{person.name}</p>
    </div>
  );
});

export default Counter;
