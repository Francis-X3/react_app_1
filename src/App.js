import "./App.css";
import Header from "./MyComponents/Header";
import Todos from "./MyComponents/Todos";
import TodoItem from "./MyComponents/TodoItem";
import React, { useState } from 'react'
import Footer from "./MyComponents/Footer";
import AddTodos from "./MyComponents/AddTodos";

function App() {
  const onDelete = (todo)=>{
    console.log("delete button click", todo)
    setTodos(todos.filter((e)=>{
      return e!==todo
    })
    )}

    const addTodo = (title , desc )=>{
      console.log ("add this to the list",title,desc)
      let sno = todos[todos.length-1].sno + 1;
      const myTodo={
        sno: sno,
        title: title,
        desc: desc,
      }
      setTodos([...todos+myTodo]);
      console.log(myTodo);
      
    }
    
  const [todos, setTodos] = useState([
    {
      sno: 1,
      task: "go for a walk",
      desc: "Walk around the eiffel tower",
    },
    {
    
      sno: 2,
      task: "Gain knowledge",
      desc: "visit the takshasila university",
    },
    {
  
      sno: 3,
      task: "explore architecture",
      desc: "wander in the aesthetioc streets of hampi",
    },
  ]);
  return (
    <>
      <Header title={"My Todos List"} search={false} />
      <AddTodos addTodo = {addTodo} />
      <Todos todos={todos} onDelete={onDelete} />

      <Footer />
    </>
  );
}

export default App;
