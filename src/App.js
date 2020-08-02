import React from "react";
import TodoList from "./Todo/TodoList";

function App() {
  const todos = [
    { id: 1, completed: false, title: "Buy Water" },
    { id: 2, completed: false, title: "Buy Meat" },
    { id: 3, completed: false, title: "Buy Sugar" },
  ];
  return (
    <div className="wrapper">
      <h1>React Tutorial</h1>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
