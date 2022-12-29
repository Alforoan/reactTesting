import React from "react";
import { FaHome } from "react-icons/fa";

function Tasks() {
  return (
    <div>
      <h1>
        <FaHome /> Tasks
      </h1>
      <form>
        <input type="text" placeholder="Add a task" />
      </form>
    </div>
  );
}

export default Tasks;
