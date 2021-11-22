import {useState} from "react";

//hooks
import useLocalStorage from "./useLocalStorage";


const useTodos = () => {

    const{
        item: todos, //se renombran
        saveItem: saveTodos, //se renombran
        sincronizeItem: sincronizeTodos, //se renombran
        loading,
        error
    } = useLocalStorage('TODOS_V1', []);

    //cuando se tiene que actualizar en otra pagina los datos
    const [storageChange, setStorageChange] = useState(false);
    
    //completados
    const completedTodos = todos.filter(todo => todo.completed).length;
    
    //totales
    const totalTodos = todos.length;
    
    //filtro de busqueda
    const [search, setSearch] = useState('');

    //modal
    const [openModal, setOpenModal] = useState(false);
    
    //lista de filtracion (sin problema en minusculas)
    let todosFiltered = todos
    if (search)
        todosFiltered = todos.filter(todo => todo.text.toLowerCase().includes(search.toLowerCase()));
    

    //añadir todo
    const insertTodo = (text) => {

        //necesita recargar todos los todos
        const newTodos = [...todos];
        //cambia el valor completed
        newTodos.push({
            completed: false,
            text
        })
    
        saveTodos(newTodos);
    }
    
    //completar todo
    const completeTodo = (text) => {
        //comprueba cual tiene el mismo texto
        const todoIndex = todos.findIndex(todo => todo.text === text);
    
        //necesita recargar todos los todos
        const newTodos = [...todos];
        //cambia el valor completed
        todos[todoIndex].completed = true;
    
        saveTodos(newTodos);
    }
    
    //borrar todo
    const deleteTodo = (text) => {
        //comprueba cual tiene el mismo texto
        const todoIndex = todos.findIndex(todo => todo.text === text);
    
        //necesita recargar todos los todos
        const newTodos = [...todos];
        //borra el registro por el index
        newTodos.splice(todoIndex, 1);
    
        saveTodos(newTodos);
    }
    

    return {
            loading,
            error,
            totalTodos,
            completedTodos,
            search,
            setSearch,
            todosFiltered,
            insertTodo,
            completeTodo,
            deleteTodo,
            openModal,
            setOpenModal,
            sincronizeTodos,
            storageChange,
            setStorageChange
        };
}

export default useTodos;