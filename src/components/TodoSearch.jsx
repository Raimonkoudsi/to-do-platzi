import React, {useContext} from 'react';
import "../styles/TodoSearch.scss";

//context
//import { TodoContext } from '../context/TodoContext';

const TodoSearch = ({ search, setSearch, loading }) => {

    //datos del todocontext
    //const { 
    //    search, 
    //    setSearch 
    //} = useContext(TodoContext);

    const onChangeValue = (event) => {
        setSearch(event.target.value);
    }

    return (
        <input 
            className="todo-search" 
            placeholder="Buscar . . ."
            value={search}
            onChange={onChangeValue}
            disabled={loading}
        />
    )
}

export default TodoSearch;
