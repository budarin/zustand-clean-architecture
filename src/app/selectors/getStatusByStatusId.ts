import { useCallback } from 'react';
import { useTodoStore } from '../../domain/store/store.tsx';

/**
 * Возвращает запись status по его id
 */

const getStatusByStatusIdSelector = (status_id: TodoStatusId) => {
    return useCallback(
        (state: TodosState): Status => {
            return state.statuses.byId[status_id as Id];
        },
        [status_id],
    );
};

export const getStatusByStatusId = (status_id: TodoStatusId): Status => {
    return useTodoStore(getStatusByStatusIdSelector(status_id));
};
