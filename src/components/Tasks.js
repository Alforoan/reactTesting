import React from "react";
import { FaHome, FaSmile } from "react-icons/fa";
import List from "./List";
import Warning from "./Warning";

function Tasks() {
  const [message, setMessage] = React.useState("");
  const [task, setTask] = React.useState("");
  const [list, setList] = React.useState([]);
  const [clear, setClear] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { id: new Date().getTime().toString(), title: message };
    setList([...list, newTask]);
    setMessage("");
  };
  const handleClick = () => {
    setClear(true);
  };
  const handleWarningClick = () => {
    console.log("testing");
    setList([]);
  };

  return (
    <div>
      <h1>
        <FaHome /> Tasks
      </h1>
      <div>{task}</div>
      <form onSubmit={handleSubmit}>
        <input
          className="task-form"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          type="text"
          placeholder="Add a task"
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        <List tasks={list} />
      </div>
      <button onClick={() => handleWarningClick()}>
        {" "}
        {clear ? (
          <Warning handleWarningClick={handleWarningClick} />
        ) : (
          "clear all"
        )}{" "}
      </button>
    </div>
  );
}

//onClick={() => handleClick()}>{"Clear All"}
export default Tasks;
