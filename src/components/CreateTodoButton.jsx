import React from 'react';
import "../styles/CreateTodoButton.scss";

const CreateTodoButton = ({ openModal, setOpenModal, storageChange }) => {

    const toggleButton = () => {
        setOpenModal(prevState => !prevState);
    }

    if (!storageChange) {
        return (
            <button 
                className={`create-todo-button open-${openModal}`}
                onClick={toggleButton}
            >
                +
            </button>
        )
    } else {
        return null;
    }

}

export default CreateTodoButton;
