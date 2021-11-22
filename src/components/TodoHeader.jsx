import React from 'react';

const TodoHeader = ({ children, loading }) => {

    //el "child" es cada uno de los hijos del array    
    return (
        <header>
            {/* el children sirve cuando hay varios hijos o ninguno sin arojar error */}
            {React.Children
                .toArray(children)
                .map(child => React.cloneElement(child, { loading }))}
            {/* el clone element sirve para pasar un estado a varios componentes */}
        </header>
    )
}

export default TodoHeader;
