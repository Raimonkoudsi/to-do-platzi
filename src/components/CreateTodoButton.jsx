import React from 'react';
import "../styles/CreateTodoButton.scss";

const CreateTodoButton = ({ openModal, setOpenModal }) => {

    const toggleButton = () => {
        setOpenModal(prevState => !prevState);
    }

    return (
        <button 
            className={`create-todo-button open-${openModal}`}
            onClick={toggleButton}
        >
            +
        </button>
    )
}

export default CreateTodoButton;
