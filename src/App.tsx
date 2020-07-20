import React from "react";
import AddTodoForm from "./AddTodoForm";
import TodoList from "./TodoList";
import TodoFilter from "./TodoFilter";
import SortFilter from "./SortFilter";
import {
  Container,
  Row,
  Col,
  Navbar,
  Form,
  FormControl,
} from "react-bootstrap";

function App() {
  return (
    <>
      <Navbar bg="primary" variant="dark" expand="lg">
        <Navbar.Brand>Puget Sound Physicians</Navbar.Brand>{" "}
        <Form inline className="ml-auto">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
      </Navbar>
      <Container fluid>
        <Row>
          <Col style={{ padding: "20px", height: "50px" }}>
            <AddTodoForm />
          </Col>
        </Row>
        <Row>
          <Col
            style={{
              display: "flex",
              flexDirection: "row",
              padding: "20px",
              height: "50px",
            }}
          >
            <TodoFilter />
            <SortFilter />
          </Col>
        </Row>
        <Row>
          <TodoList />
        </Row>
      </Container>
    </>
  );
}

export default App;
