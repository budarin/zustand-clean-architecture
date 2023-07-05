import { useCallback } from 'react';
import { useTodoStore } from '../../domain/store/store.tsx';

/**
 * Возвращает полное описание задачи из store по ее id
 */

type TodoByIdSelector = (state: TodosState) => ExtendedTodo;

const getTodoByIdSelector = (id: Id): TodoByIdSelector => {
    return useCallback(
        (state: TodosState): ExtendedTodo => {
            return state.todos.byId[id as Id];
        },
        [id],
    );
};

export const getTodoById = (id: Id): ExtendedTodo => {
    return useTodoStore(getTodoByIdSelector(id));
};
