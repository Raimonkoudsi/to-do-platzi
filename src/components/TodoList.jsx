import React from 'react';
import "../styles/TodoList.scss";

const TodoList = props => {

    //para que no de error si queremos que sea render prop o render function
    const renderFunction = props.children || props.render;

    return (
        <section className="todo-list-container">

            {props.error && props.onError()}

            {props.loading && props.onLoading()}

            {/* Cuando no hay items */}
            {(!props.loading && !props.totalTodos) && props.onEmptyTodos()}

            {/* Cuando no hay resultado en el buscador */}
            {(props.totalTodos && !props.todosFiltered.length) && props.onEmptySearchResults(props.searchText)}

            {(!props.loading && !props.error) && props.todosFiltered.map(renderFunction)}
        </section>
    )
}

export default TodoList;
