import { useCallback } from 'react';
import { useTodoStore } from '../../domain/entities/store';

const getTodosCountByTimestampSelector = (timestamp: TimeStamp) =>
    useCallback((state: TodosState) => state.todos.idsByDueDate[timestamp]?.length || 0, [timestamp]);

export const getTodosCountByTimestamp = (timestamp: TimeStamp) =>
    useTodoStore(getTodosCountByTimestampSelector(timestamp));
