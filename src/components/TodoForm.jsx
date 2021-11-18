import React, {useContext, useState} from 'react';
import "../styles/TodoForm.scss";

//context
import {TodoContext} from "../context/TodoContext";


const TodoForm = () => {

    const [newTodoValue, setNewTodoValue] = useState('');

    //datos del todocontext
    const {
        insertTodo,
        setOpenModal
    } = useContext(TodoContext);


    const onChange = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onCancel = () => {
        setOpenModal(false);
    }

    const onSubmit = (event) => {
        //con esto no se recarga la pagina
        event.preventDefault();

        insertTodo(newTodoValue);

        setOpenModal(false);
    }

    return (
        <form onSubmit={onSubmit}>
            <label>Escribe tu nuevo To Do</label>
            <textarea
                value = {newTodoValue}
                onChange = {onChange}
                placeholder = "Escribe una nueva tarea"
            />
            <div className="todo-form-button-container">

                <button
                    className="todo-form-button todo-form-button-add"
                    type= "submit"
                >
                    Añadir
                </button>
            </div>
        </form>
    )
}

export default TodoForm;
