import React from 'react';
import "../styles/ChangeAlert.scss";

//hoc
import withStorageListener from '../hoc/withStorageListener';


//components
import Modal from './Modal';


const ChangeAlert = ({ show, toggleShow }) => {

    if(show) {
        return (
            <Modal>
                <div className="message-box-container">
                    <label>Hubo cambios</label>
                    <div className="message-box-button-container">
                        <button
                            className="message-box-button"
                            onClick={() => toggleShow(false)}
                        >
                            Recargar
                        </button>
                    </div>
                </div>
            </Modal>
        )
    } else {
        return null;
    }
}

const ChangeAlertWithStorageListener = withStorageListener(ChangeAlert);

export default ChangeAlertWithStorageListener;
