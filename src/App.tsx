import React from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import TodoFilter from "./TodoFilter";
import SortFilter from "./SortFilter";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <>
      <Container className="text-center">
        <Row className="justify-content-md-center">
          <AddTodoForm />
        </Row>
        <TodoList />
        <Row>
          <Col></Col>
          <Col>
            <TodoFilter />
          </Col>
          <Col>
            <SortFilter />
          </Col>
          <Col></Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
