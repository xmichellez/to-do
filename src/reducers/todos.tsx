import { TodoState } from "../types/index";
import { Action } from "../actions/index";
import { ADD_TODO, TOGGLE_TODO } from "../constants/index";

const initialState: TodoState = {
  todos: [],
};

export default function todoReducer(
  state: TodoState = initialState,
  action: Action
): TodoState {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload.todo] };
    case TOGGLE_TODO:
      const updatedtodos = state.todos.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, complete: !todo.complete }
          : todo
      );
      return {
        ...state,
        todos: updatedtodos,
      };
    default:
      return state;
  }
}
