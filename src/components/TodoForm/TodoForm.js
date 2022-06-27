import React, { useState, useEffect, useRef } from 'react'
import './todoForm.css'

const TodoForm = (props) => {
    const [input, setInput] = useState('');

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus();
    })

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })

        setInput('');
    }


    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type="text" placeholder='add a todo' value={input} name='text' className='todo-input' onChange={handleChange} ref={inputRef}/>
            <button className='todo-button'>Save Todo</button>
        </form>
    )
}

export default TodoForm