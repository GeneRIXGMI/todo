import React from "react";
import { useState, useRef } from "react";

const Todo=() =>{
  const[todos, setTodos]= useState({});
  const inputRef = useRef(null);

return(
  <>
  <div>Leave the computer alone for once and do your tasks:</div>
  {todos.map((todo)=>{
    return <div key={todo}>{todo}</div>;
  })}

  <label>
    Task:<input ref={inputRef} />
  </label>
  <button onClick={()=>{
    setTodos([...todos, inputRef.current.value])
  }}
  >Add Task</button>
  </>
)
}

export default Todo;