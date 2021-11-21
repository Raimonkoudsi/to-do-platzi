import React, {useContext} from 'react';
import "./App.scss";

//context
import { TodoContext } from '../context/TodoContext';

//components
import TodoCounter from "../components/TodoCounter";
import TodoSearch from "../components/TodoSearch";
import TodoList from "../components/TodoList";
import TodoItem from "../components/TodoItem";
import CreateTodoButton from "../components/CreateTodoButton";
import Modal from "../components/Modal";
import TodoForm from '../components/TodoForm';
import TodoHeader from '../components/TodoHeader';

//skeleton
import TodosError from "../components/skeleton/TodosError";
import TodosLoading from "../components/skeleton/TodosLoading";
import EmptyTodos from "../components/skeleton/EmptyTodos";


const AppUI = () => {

  //datos del todocontext
  const { 
    error, 
    loading, 
    todosFiltered, 
    completeTodo, 
    deleteTodo,
    openModal,
    setOpenModal,
    totalTodos,
    completedTodos,
    search,
    setSearch
  } = useContext(TodoContext);

    return (
        <React.Fragment>

        <TodoHeader>
          <TodoCounter 
            totalTodos = {totalTodos}
            completedTodos = {completedTodos}
          />

          <TodoSearch
            search= {search}
            setSearch = {setSearch}
          />
        </TodoHeader>


        <TodoList>
          {/*si hubo error*/}
          {error && <TodosError error={error} />}

          {/*cargando*/}
          {loading && 
            new Array(4).fill().map((item, index)=>(
              <TodosLoading />
          ))}

          {/*si la lista esta vacia*/}
          {(!loading && !todosFiltered.length) && <EmptyTodos />}

          {todosFiltered.map((todo, i) => (
            <TodoItem 
              key={i} 
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
        </TodoList>

        {openModal && (
          <Modal>
            <TodoForm />
          </Modal>
        )}
  
        <CreateTodoButton 
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
  
      </React.Fragment>
    )
}

export default AppUI;
