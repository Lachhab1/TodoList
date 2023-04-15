import React,{useState} from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function TodoList({handleSubmit}) {
  const [dataInput,setDataInput] = useState("");
  return (
    <>
      <h1 className='display-3 mb-3'>To-Do List</h1>
      <Form onSubmit={handleSubmit}>
      <Row className="g-2">
      <Col lg={8} md sm={12}>
        <FloatingLabel controlId="floatingInputGrid" label="new Todo">
          <Form.Control name='todo' onChange={(event) => setDataInput(event.target.value)} value={dataInput} type="texte" placeholder="new Task" />
        </FloatingLabel>
      </Col>
      <Col lg={4}>
        <Button size='lg' variant='secondary' type="submit">Add</Button>
      </Col>
    </Row>
      </Form>
    </>
  );
}

export default TodoList;