import { useCallback } from 'react';
import { useTodoStore } from '../../domain/store/store.tsx';

/**
 * Возвращает число задач для даты в виде Timestamp
 */

const getTodosCountByTimestampSelector = (timestamp: TimeStamp) => {
    return useCallback(
        (state: TodosState): number => {
            return state.todos.idsByDueDate[timestamp]?.length || 0;
        },
        [timestamp],
    );
};

export const getTodosCountByTimestamp = (timestamp: TimeStamp): number => {
    return useTodoStore(getTodosCountByTimestampSelector(timestamp));
};
