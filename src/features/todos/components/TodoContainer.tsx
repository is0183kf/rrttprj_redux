import { useEffect, type FC } from 'react';
import { TodoForm } from './TodoForm';
import { TodoList } from './TodoList';
import { useAppSelector, useAppDispatch } from '../../../app/hooks';
import { fetchTodosAsync, selectIsFetching, selectTodosByDisplayStatus } from '../todosSlice';
import { DisplayStatusSelector } from './DisplayStatusSelector'
import { BaseModal } from './modals/BaseModal'

export const TodoContainer: FC = () => {
    const todos = useAppSelector(selectTodosByDisplayStatus);

    const isFetching = useAppSelector(selectIsFetching);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchTodosAsync());
    }, []);

    if (isFetching) return <div>読み込み中</div>;
    return (
        <div>
            <BaseModal />
            <TodoForm />
            <hr />
            <DisplayStatusSelector />
            <h2>Todo一覧</h2>
            <TodoList todos={todos} />
        </div>
    );
};