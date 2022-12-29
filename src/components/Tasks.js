import React from "react";
import { FaHome } from "react-icons/fa";

function Tasks() {
  const [message, setMessage] = React.useState("");

  return (
    <div>
      <h1>
        <FaHome /> Tasks
      </h1>
      <button className="task-btn"></button>
    </div>
  );
}

export default Tasks;
