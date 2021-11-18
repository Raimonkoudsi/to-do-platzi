import React from 'react';
import "../styles/TodoItem.scss";

const TodoItem = props => {

    return (
        <li className="todo-item">
            <span 
                className={`icon icon-check ${props.completed && 'icon-check--active'}`}
                onClick={props.onComplete}
            >
                <div className="check-img"/>
            </span>
            <p className={`todo-item-p ${props.completed && 'todo-item-p--complete'}`}>
                {props.text}
            </p>
            <span 
                className="icon icon-delete"
                onClick={props.onDelete}  
            >
                <div className="delete-img"/>
            </span>
        </li>
    )
}

export default TodoItem;
