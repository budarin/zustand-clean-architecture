import { useCallback } from 'react';
import { useTodoStore } from '../../domain/store/store.tsx';

const getTodoByIdSelector = (id: Id) => useCallback((state: TodosState) => state.todos.byId[id as Id], [id]);

export const getTodoById = (id: Id) => useTodoStore(getTodoByIdSelector(id));
