import * as constants from "../constants";
import { Todo } from "../types";

let nextId = 0;
let date = new Date();

export interface AddTodo {
  type: constants.ADD_TODO;
  payload: { todo: Todo };
}

export interface ToggleTodo {
  type: constants.TOGGLE_TODO;
  payload: { id: number };
}

export interface SetFilter {
  type: constants.VISIBILITY_FILTERS;
  payload: { filter: string };
}

export interface Sort {
  type: constants.SORT;
  payload: { sort: string };
}

export function AddTodo(text: string): AddTodo {
  return {
    type: constants.ADD_TODO,
    payload: {
      todo: {
        id: nextId++,
        date: date.toLocaleDateString(),
        text: text,
        complete: false,
      },
    },
  };
}

export function ToggleTodo(id: number): ToggleTodo {
  return {
    type: constants.TOGGLE_TODO,
    payload: {
      id: id,
    },
  };
}

export function SetFilter(filter: string): SetFilter {
  return {
    type: constants.VISIBILITY_FILTERS,
    payload: {
      filter: filter,
    },
  };
}

export function Sort(sort: string): Sort {
  return {
    type: constants.SORT,
    payload: {
      sort: sort,
    },
  };
}

export type Action = AddTodo | ToggleTodo | SetFilter | Sort;
