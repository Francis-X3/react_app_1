import React from "react";
import  { useState } from "react";

export default function AddTodos({addTodo}) {
  const [title, setTitle] = useState("");

  const [desc, setDesc] = useState("");

  const submit = (e)=>{
    e.preventDefault();
    
    if(!title || !desc){
      alert("Task or Description empty");
    }
    addTodo(title,desc);
  }
  return (
    <div className="container" >
      <form  onSubmit = {submit}>
        <div className="mb-3">
          <label  className="form-label">
            Task
          </label>
          <input
          htmlFor="title" type="text" className="form-control" id="title" aria-describedby="emailHelp" value={title} onChange = {(e)=>{setTitle(e.target.value)}}
          />
        </div>
        <div className="mb-3">
          <label  className="form-label">
            Description
          </label>
          <input htmlFor="desc" value={desc} onChange = {(e)=>{setDesc(e.target.value)}} type="desc" className="form-control" id="desc" />
        </div>

        <button type="submit" className="btn btn-primary">
         Add Todo
        </button>
      </form>
    </div>
  );
}
