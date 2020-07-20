import React from "react";
import { Todo } from "./types/index";
import { ToggleTodo } from "./actions";
import { connect, useDispatch } from "react-redux";
import { RootState } from "./reducers";
import { VISIBILITY_FILTERS, SORT } from "./constants";
import { Table } from "react-bootstrap";

interface Props {
  todos: Todo[];
  filter: string;
  sort: string;
}

function mapStateToProps(state: RootState) {
  return {
    todos: state.todoReducer.todos,
    filter: state.filterReducer.filter.visibility,
    sort: state.filterReducer.filter.sort,
  };
}

export const TodoList: React.FC<Props> = ({ todos, filter, sort }) => {
  console.log(todos);
  const dispatch = useDispatch();

  //filter first then sort seems ... slow
  const filtered = todos.filter((todo) => {
    if (filter === VISIBILITY_FILTERS.SHOW_ALL) {
      return true;
    } else if (filter === VISIBILITY_FILTERS.SHOW_ACTIVE) {
      return !todo.complete;
    } else if (filter === VISIBILITY_FILTERS.SHOW_COMPLETED) {
      return todo.complete;
    }
  });

  //temporarily actually just sorting by id because it was simpler to figure out - will change later maybe
  const sorting = (a: Todo, b: Todo) =>
    sort === SORT.CHRONOLOGICALLY ? b.id - a.id : a.id - b.id;

  const sorted = filtered.sort(sorting);

  return (
    <Table bordered hover>
      <tbody>
        {sorted.map((todo) => (
          <tr key={todo.id}>
            <td>
              <input
                type="checkbox"
                checked={todo.complete}
                onChange={() => dispatch(ToggleTodo(todo.id))}
              />
            </td>
            {/* just to be able to see for now */}
            <td>
              <p
                style={{
                  textDecoration: todo.complete ? "line-through" : undefined,
                }}
              >
                {todo.text} {todo.id} {todo.date}
              </p>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default connect(mapStateToProps)(TodoList);
