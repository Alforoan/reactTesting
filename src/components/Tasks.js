import React from "react";
import { FaHome, FaSmile, FaTwitterSquare } from "react-icons/fa";
import List from "./List";
import Warning from "./Warning";

function Tasks() {
  const [message, setMessage] = React.useState("");

  const [list, setList] = React.useState([]);
  const [clear, setClear] = React.useState(false);
  const [isEditing, setIsEditing] = React.useState(false);
  const [editID, setEditID] = React.useState(null);
  const [sortTime, setSortTime] = React.useState(false);

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
          return task;
        })
      );
      setMessage("");

      setEditID(null);

      setIsEditing(false);
    } else {
      const newTask = {
        id: new Date().getTime().toString(),
        title: message,
        isImportant: false,
      };
      setList([...list, newTask]);
      setMessage("");
    }
  };

  const alphabeticalOrder = () => {
    let sorted = list.sort((a, b) => a.title.localeCompare(b.title));

    if (list.length > 1) {
      setList([...sorted]);
    }
  };
  const handleOrder = () => {
    let sorted = list.sort((a, b) => a.id.localeCompare(b.id));
    setList([...sorted]);
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

  const importantTask = (id) => {
    let specificStar = list.filter((task) => task.id === id);
    setList(list.filter((task) => task.id !== id));
    if (specificStar[0].isImportant === true) {
      specificStar[0].isImportant = false;
    } else {
      specificStar[0].isImportant = true;
    }

    setList([...list]);
  };

  return (
    <div>
      <h1>
        <FaHome /> Tasks
      </h1>
      <button onClick={alphabeticalOrder}>{"Sort Alphabetically"}</button>
      <button onClick={handleOrder}>Default</button>
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
        <List
          tasks={list}
          removeTask={removeTask}
          editTask={editTask}
          importantTask={importantTask}
        />
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
