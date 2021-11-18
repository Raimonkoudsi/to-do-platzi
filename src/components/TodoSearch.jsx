import React, {useContext} from 'react';
import "../styles/TodoSearch.scss";

//context
import { TodoContext } from '../context/TodoContext';

const TodoSearch = () => {

    //datos del todocontext
    const { 
        search, 
        setSearch 
    } = useContext(TodoContext);

    const onChangeValue = (event) => {
        setSearch(event.target.value);
    }

    return (
        <input 
            className="todo-search" 
            placeholder="Buscar . . ."
            value={search}
            onChange={onChangeValue}
        />
    )
}

export default TodoSearch;
