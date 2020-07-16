import React, { useState } from "react";
import { AddTodo } from "./actions/index";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

export const AddTodoForm: React.FC = () => {
  const dispatch = useDispatch(); //not actually using mapdispatchtoprops here because there was a weird bug with - will further investigate
  const [text, setText] = useState("");
  return (
    <Form>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />

      <Button
        type="submit"
        onClick={(e) => {
          e.preventDefault();
          if (!text) {
            alert("no");
          } else {
            dispatch(AddTodo(text));
            setText("");
          }
        }}
      >
        Add Todo
      </Button>
    </Form>
  );
};

export default AddTodoForm;
