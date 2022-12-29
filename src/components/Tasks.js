import React from "react";
import { FaHome } from "react-icons/fa";

const handleClick = () => {};

function Tasks() {
  return (
    <div>
      <h1>
        <FaHome /> Tasks
      </h1>
      <form>
        <input onClick={handleClick} type="text" placeholder="Add a task" />
      </form>
    </div>
  );
}

export default Tasks;
