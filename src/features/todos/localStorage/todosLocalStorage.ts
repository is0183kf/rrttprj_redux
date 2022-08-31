import type { Todo } from '../types';

//   重複を避けるため、PREFIX_KEYを付与
//   todoデータ    : 'todoApp:todos'
//   userデータ    : 'todoApp:user'
//   settingデータ : 'todoApp:setting'

const PREFIX_KEY = 'todoApp';
const LOCAL_STORAGE_KEY = `${PREFIX_KEY}:todos`;

export const setTodos = (todos: Todo[]) => {
  window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
};

export const getTodos = (): Todo[] => {
  const json = window.localStorage.getItem(LOCAL_STORAGE_KEY);
  if (!json) return [];

  const todos = JSON.parse(json) as Todo[];
  return todos;
};