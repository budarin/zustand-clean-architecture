import { useCallback } from 'react';
import { useTodoStore } from '../../domain/entities/store';

const selector = (id: Id) => useCallback((state: TodosState) => state.todos.byId[id as Id], [id]);

export const getTodoById = (id: Id) => useTodoStore(selector(id));
