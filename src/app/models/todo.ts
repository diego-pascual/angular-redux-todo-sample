export interface Todo {
  id: string;
  name: string;
}

export interface TodoState{
    items : Todo[],
    selected : Todo
}