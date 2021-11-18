import React from 'react';
import "../../styles/skeleton/TodosLoading.scss";

const TodosLoading = () => {
    return (
        <div className="loading-todo-container">
            <span className="loading-todo-complete-icon" />
            <p className="loading-todo-text"></p>
            <span className="loading-todo-delete-icon" />
        </div>
    )
}

export default TodosLoading;
