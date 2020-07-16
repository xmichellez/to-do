export interface TodoState {
  todos: Todo[];
}

export interface FilterState {
  filter: {
    visibility: string;
    sort: string;
  };
}

export interface Todo {
  id: number;
  date: string;
  text: string;
  complete: boolean;
}

export type ToggleTodo = (selectedTodo: Todo) => void;

export type AddTodo = (text: string, date: Date) => void;

export type SetFilter = (filter: string) => void;

export type Sort = (sort: string) => void;
