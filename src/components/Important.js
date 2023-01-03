import React from "react";
import { FaStar, FaSmile, FaTwitterSquare } from "react-icons/fa";
import List from "./List";
import Warning from "./Warning";
import ImportantList from "./ImportantList";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return JSON.parse(localStorage.getItem("list"));
  } else {
    return [];
  }
};

function Important() {
  const [message, setMessage] = React.useState("");

  const [list, setList] = React.useState(getLocalStorage());
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
        isImportant: true,
        isCompleted: false,
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
    console.log(specificStar);
    setList([...list]);
  };

  const completeTask = (id) => {
    let specificTask = list.filter((task) => task.id === id);
    // setList(list.filter((task) => task.id !== id));

    if (specificTask[0].isCompleted === true) {
      specificTask[0].isCompleted = false;
    } else {
      specificTask[0].isCompleted = true;
    }
    console.log(specificTask[0].isCompleted);
    setList([...list]);
  };

  React.useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);
  return (
    <div>
      <h1>
        <FaStar /> Important
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
        <ImportantList
          tasks={list}
          removeTask={removeTask}
          editTask={editTask}
          importantTask={importantTask}
          completeTask={completeTask}
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
export default Important;
