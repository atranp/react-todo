import React, {useState} from 'react'
import TodoForm from '../TodoForm/TodoForm'
import { RiCloseCircleLine} from 'react-icons/ri'
import { TiEdit} from 'react-icons/ti'
import './todo.css'

const Todo = ({todos, completeTodo, removeTodo}) => {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

  return todos.map((todo, index) => (
    <div className={todo.isComplate ? 'todo-row complate' : 'todo-row'} key={index}>

        <div key={todo.id} onClick={() => completeTodo(todo.id)}>
            {todo.text}
        </div>
        <div className='icons'>
            <RiCloseCircleLine onClick={() => removeTodo(todo.id)} className='delete-icon' />
            <TiEdit onClick={() => setEdit({id: todo.id, value: todo.text} )} className='edit-icon' />
        </div>
    </div>
  ))
}

export default Todo