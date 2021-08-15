import React, { useState } from "react";

function ToDoItem(props) {
  // const [isDone, setIsDone] = useState(false);

  // function handleClick() {
  //   setIsDone((prevValue) => {
  //     return !prevValue;
  //   });
  // }

  return (
    <li
      // onClick={handleClick}
      // style={{
      //   textDecoration: isDone ? "line-through" : "none",
      //   cursor: "pointer"
      // }}
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      {props.text}
    </li>
  );
}

export default ToDoItem;
