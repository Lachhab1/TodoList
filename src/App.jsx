import React, { useState } from 'react';
import InputTodoList from './components/InputTodoList';
import {TodoList} from './components/TodoList';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [todos, setTodos] = useState([]);
  const [edit,setEdit] = useState(null);
  function handleSubmit(event) {
    event.preventDefault();
    const newTodo = {id:todos.length === 0 ? 1: todos[todos.length-1].id+1,body:event.target.elements.todo.value};
    event.target.elements.todo.value !="" ?
      setTodos((prev) => [...prev,newTodo])
      :"";
      event.target.reset();
  }
  function handleEdit(id){
    setEdit(id);
  }
  function handleUpdate(id,newBody){
    setTodos((prev) => {
      return prev.map((todo) => {  
        return todo.id === id ?  {...todo,body:newBody}:todo;
      })
    })
    setEdit(null);
  }
  function handleDelete(id){
    setTodos((prev) => prev.filter((tod) => tod.id!==id ));
  }
  return (
    <div style={{height:"100vh"}}>
      <div className="bg-info h-100 d-flex flex-column align-items-center">
        <InputTodoList handleSubmit={handleSubmit} />
        <Card bg='light' border="light" className='w-50 mx-auto mt-5 p-2'>
          <Card.Title className='text-center'>Tasks</Card.Title>
        <Card.Body>
          <TodoList todoList={todos} handleDelete={handleDelete} handleEdit={handleEdit} handleUpdate={handleUpdate} edit={edit} setEdit={setEdit}/>
        </Card.Body>
      </Card>
      </div>
    </div>
  );
}

export default App;