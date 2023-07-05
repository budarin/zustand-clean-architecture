import { useCallback } from 'react';
import { useTodoStore } from '../../domain/store/store.tsx';

/**
 * Возвращает запись status по его id
 */

type StatusByStatusIdSelector = (state: TodosState) => Status;

const getStatusByStatusIdSelector = (status_id: TodoStatusId): StatusByStatusIdSelector => {
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
