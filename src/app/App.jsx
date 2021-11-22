import React from "react";
import "./App.scss";

//hoc
import ChangeAlertWithStorageListener from "../components/ChangeAlert";

//hooks
import useTodos from "../hooks/useTodos";
import withStorageListener from "../hoc/withStorageListener";

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
import EmptySearchResults from "../components/skeleton/EmptySearchResults";



const App = () => {

  //datos del hook
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
    setSearch,
    insertTodo,
    sincronizeTodos,
    storageChange
  } = useTodos();

  console.log(storageChange);


  return (
    <React.Fragment>

      <TodoHeader loading={loading}>
        <TodoCounter 
          totalTodos = {totalTodos}
          completedTodos = {completedTodos}
          //loading = {loading}
        />

        <TodoSearch
          search = {search}
          setSearch = {setSearch}
          //loading = {loading}
        />
      </TodoHeader>


      <TodoList
        error={error}
        loading={loading}
        todosFiltered={todosFiltered}
        totalTodos={totalTodos}
        searchText={search}
        onError={() => <TodosError />}
        onLoading={() => <TodosLoading />}
        onEmptyTodos={() => <EmptyTodos />}
        onEmptySearchResults={(searchText) => <EmptySearchResults searchText={searchText} />}
        render={todo =>( 
          <TodoItem 
            key={todo.text} 
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        )}

      />

      {openModal && (
        <Modal>
          <TodoForm 
            insertTodo={insertTodo}
            setOpenModal={setOpenModal}
          />
        </Modal>
      )}


      <CreateTodoButton 
        openModal={openModal}
        setOpenModal={setOpenModal}
        storageChange={storageChange}
      />    

      {/* Mensaje de actualizar pantalla por cambios */}
      <ChangeAlertWithStorageListener
        sincronize={sincronizeTodos}
      />

    </React.Fragment>
  );
}

export default App;
