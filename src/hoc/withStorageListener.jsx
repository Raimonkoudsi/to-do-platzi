import React, {useState} from 'react';

//hooks
import useTodos from '../hooks/useTodos';


function withStorageListener(WrappedComponent) {
    return function WrappedComponentWithStorageListener(props) {

        //datos del hook
        const { 
            storageChange,
            setStorageChange
        } = useTodos();

        //cuando hay cambios, se ejecuta el listener solo una vez y luego se remueve
        React.useEffect(() => {
            const onChange = (change) => {
                if (change.key === "TODOS_V1") {
                    console.log("Hubo cambios en TODOS_V1");
                    setStorageChange(true);
                }
            };

            window.addEventListener("storage", onChange);

            /* para recargar la vista
            return () => {
                window.removeEventListener("storage", onChange);
            };
            */
        }, []);


        const toggleShow = () => {
            props.sincronize();
            setStorageChange(false);
        }

        return (
            <WrappedComponent 
                show={storageChange} 
                toggleShow={toggleShow}
            />
        );
    }
}

export default withStorageListener;
