import React from "react";
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Stack from 'react-bootstrap/Stack';
import { PencilSquare,Trash} from 'react-bootstrap-icons';

export const TodoList = ({todoList,handleDelete,handleUpdate,handleEdit,edit,setEdit}) => {
    return (
        <Table striped bordered hover className="w-50 mx-auto text-center">
            <thead>
                <tr>
                    <th>
                        id
                    </th>
                    <th>
                        Task
                    </th>
                    <th>
                        delete
                    </th>
                    <th>
                        Edit
                    </th>
                </tr>
            </thead>

            <tbody>
            {todoList.map((todo,index) => ( 
                <tr key={index}>
                    {edit === todo.id ? (
                    <td colSpan={4} >
                        <Form onSubmit={(event) => {
                            event.preventDefault();
                            event.target.elements.editTodo.value !="" ?
                            handleUpdate(todo.id,event.target.elements.editTodo.value) 
                            :""
                        }}  >
                            <Stack direction="horizontal" gap={3}>
                                <Form.Control name="editTodo" defaultValue={todo.body} />
                                <Button variant="secondary" type="submit">Save</Button>
                                <div className="vr" />
                                <Button variant="outline-danger" onClick={() => setEdit(null)} >Reset</Button>
                            </Stack>
                        </Form>
                        </td>
                    ) : (
                        <>
                        <td>{index+1}</td>
                        <td>
                            {todo.body}
                        </td>
                        <td>
                            <Button variant="outline-light" onClick={() => handleDelete(todo.id)}><Trash color="red" size={20}/></Button>
                        </td>
                        <td>
                            <Button variant="outline-light" onClick={() => handleEdit(todo.id)}><PencilSquare color="green" size={20}/></Button>
                        </td>
                        </>
                    )} 
                    </tr>
            ))}
            </tbody>
        </Table>
    );
}