import { useEffect, type FC } from 'react';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { selectTodos, selectDeletedTodos, fetchTodosAsync, selectIsFetching } from '../todosSlice';

export const TodoContainer: FC = () => {
    const todos = useAppSelector(selectTodos);
    const deletedTodos = useAppSelector(selectDeletedTodos);

    const isFetching = useAppSelector(selectIsFetching);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchTodosAsync());
    }, []);

    if (isFetching) return <div>読み込み中</div>;
    return (
        <div>
            <TodoForm />
            <hr />
            <h2>Todo一覧</h2>
            <TodoList todos={todos} />
            <hr />
            <h2>削除されたTodo一覧</h2>
            <TodoList todos={deletedTodos} />
        </div>
    );
};