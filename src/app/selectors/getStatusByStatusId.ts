import { useCallback } from 'react';
import { useTodoStore } from '../../domain/store/store.tsx';

const getStatusByStatusIdSelector = (status_id: TodoStatusId) =>
    useCallback((state: TodosState) => state.statuses.byId[status_id as Id], [status_id]);

export const getStatusByStatusId = (status_id: TodoStatusId) => useTodoStore(getStatusByStatusIdSelector(status_id));
