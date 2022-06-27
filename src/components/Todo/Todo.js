import React, {useState} from 'react'
import TodoForm from '../TodoForm/TodoForm'
import TodoList from '../TodoList/TodoList'
import './todo.css'

const Todo = () => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

  return todos.map((todo, index) => (
    <div className={todo.isComplate ? 'todo-row complate' : 'todo-row'} key={index}></div>
  ))
}

export default Todo