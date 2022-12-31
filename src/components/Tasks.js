import React from "react";
import { FaHome, FaSmile } from "react-icons/fa";
import List from "./List";
import Warning from "./Warning";

function Tasks() {
  const [message, setMessage] = React.useState("");
  const [task, setTask] = React.useState("");
  const [list, setList] = React.useState([]);
  const [clear, setClear] = React.useState(false);
  const [isEditing, setIsEditing] = React.useState(false);
  const [editID, setEditID] = React.useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!message) {
      console.log("put in a value");
    } else if (message && isEditing) {
      setList(
        list.map((task) => {
          if (task.id === editID) {
            return { ...task, title: message };
          }
          return message;
        })
      );
      setMessage("");
      console.log(message);
      setEditID(null);
      console.log(editID);
      setIsEditing(false);
      console.log(isEditing);
    } else {
      const newTask = { id: new Date().getTime().toString(), title: message };
      setList([...list, newTask]);
      setMessage("");
    }
  };
  const handleClick = () => {
    if (list.length > 0) {
      setClear(true);
    }
  };
  const handleWarningClick = () => {
    setList([]);
    setClear(false);
  };

  const handleWarningClickTwo = () => {
    setClear(false);
  };

  const removeTask = (id) => {
    setList(list.filter((task) => task.id !== id));
  };

  const editTask = (id) => {
    const specificTask = list.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setMessage(specificTask.title);
  };

  return (
    <div>
      <h1>
        <FaHome /> Tasks
      </h1>

      <form onSubmit={handleSubmit}>
        <input
          className="task-form"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          type="text"
          placeholder="Add a task"
        />
        <button type="submit">{isEditing ? "Edit" : "Submit"}</button>
      </form>
      <div>
        <List tasks={list} removeTask={removeTask} editTask={editTask} />
      </div>
      <button onClick={() => handleClick()}>{clear ? "" : "clear all"}</button>
      {clear ? (
        <Warning
          handleWarningClick={handleWarningClick}
          handleWarningClickTwo={handleWarningClickTwo}
        />
      ) : (
        ""
      )}
    </div>
  );
}

//onClick={() => handleClick()}>{"Clear All"}
export default Tasks;
