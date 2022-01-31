import React from "react";
import TodoItem from "./TodoItem";

export default function Todos(props) {
  return (
    <div className="container">
      <h3  className='text-center'>Todos game on</h3>
      {props.todos.length===0? "Your done with ur tasks" :
      props.todos.map((todo)=>{
      return <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>
       })}
    
      
    </div>
  );
}
