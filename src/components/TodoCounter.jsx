import React, {useContext} from 'react';
import "../styles/TodoCounter.scss";

//context
//import { TodoContext } from '../context/TodoContext';


const TodoCounter = ({ totalTodos, completedTodos, loading }) => {

    //datos del todocontext
    //const { 
    //    totalTodos, 
    //    completedTodos
    //} = useContext(TodoContext);

    return (
        <h2 
            className={`todo-counter ${loading && "todo-counter--loading"}`}
        >
            Has completado {completedTodos} de {totalTodos} TODOs
        </h2>
    )
}

export default TodoCounter;
