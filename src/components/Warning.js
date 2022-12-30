import React from "react";

const Warning = (props) => {
  return (
    <main>
      <div>
        <h3>Are you sure you want to do that?</h3>
      </div>
      <div onClick={props.handleWarningClick}>Yes</div>
      <div>No</div>
    </main>
  );
};

export default Warning;
