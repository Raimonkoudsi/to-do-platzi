import React from "react";

//context
import { TodoProvider } from "../context/TodoContext";

//components
import AppUI from "./AppUI";


const App = () => {

  //El provider del context del TODO
  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
