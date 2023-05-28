import { useCallback } from 'react';
import { useTodoStore } from '../domain/store';

const selector = (timestamp: TimeStamp) =>
    useCallback((state: TodosState) => state.todos.idsByDueDate[timestamp]?.length || 0, [timestamp]);

export const getTodosCountByTimestamp = (timestamp: TimeStamp) => useTodoStore(selector(timestamp));
