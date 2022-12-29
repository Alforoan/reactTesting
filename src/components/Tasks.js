import React from "react";
import { FaHome } from "react-icons/fa";

function Tasks() {
  const [message, setMessage] = React.useState("Add a task");
  const handleClick = () => {
    setMessage("Type something you have to do!");
  };

  return (
    <div>
      <h1>
        <FaHome /> Tasks
      </h1>
      <form>
        <input
          onClick={() => handleClick()}
          type="text"
          placeholder={message}
        />
      </form>
    </div>
  );
}

export default Tasks;
