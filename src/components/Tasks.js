import React from "react";
import { FaHome } from "react-icons/fa";

function Tasks() {
  const [message, setMessage] = React.useState("Add a task");
  const [task, setTask] = React.useState("");
  const handleClick = () => {
    setMessage("Type something you have to do!");
  };

  const handleSubmit = () => {};

  return (
    <div>
      <h1>
        <FaHome /> Tasks
      </h1>
      <div>{task}</div>
      <form onSubmit={() => handleSubmit()} type="submit">
        <input
          className="task-form"
          onClick={() => handleClick()}
          type="text"
          placeholder="Add a task"
        />
        <button type="submit"></button>
      </form>
    </div>
  );
}

export default Tasks;
