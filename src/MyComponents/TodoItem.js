import React from 'react'
import Todos from './Todos'


export default function TodoItem({todo , onDelete}) {
  return (
    <div>
     <h4>{todo.task}</h4>
     <p>{todo.desc}</p>
     <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>

    </div>
  )
}
