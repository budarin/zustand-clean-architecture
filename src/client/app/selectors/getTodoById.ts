import { useCallback } from 'react';
import { useTodoStore } from '../../domain/entities/store';

const getTodoByIdSelector = (id: Id) => useCallback((state: TodosState) => state.todos.byId[id as Id], [id]);

export const getTodoById = (id: Id) => useTodoStore(getTodoByIdSelector(id));
