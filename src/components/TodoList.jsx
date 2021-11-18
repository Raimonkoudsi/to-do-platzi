import React from 'react';
import "../styles/TodoList.scss";

const TodoList = props => {
    return (
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
    )
}

export default TodoList;
