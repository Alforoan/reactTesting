import React from "react";
import { FaHome } from "react-icons/fa";

function Tasks() {
  const [message, setMessage] = React.useState("");
  const [task, setTask] = React.useState("");
  const [list, setList] = React.useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { id: new Date().getTime().toString(), title: message };
    setList([...list, newTask]);
    setMessage("");
  };

  return (
    <div>
      <h1>
        <FaHome /> Tasks
      </h1>
      <div>{task}</div>
      <form onSubmit={() => handleSubmit()} type="submit">
        <input
          className="task-form"
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          placeholder="Add a task"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Tasks;
