import { useTodoStore } from '../../domain/store/store.tsx';
import { navigationFilterTypes } from '../../domain/store/navigationFilter/index.ts';

/**
 * Возвращает список id для текщего navigationFilter или пустой массив
 */

const emptyList = [] as Id[];

const getTodoListByNavigationFilterSelector = (state: TodosState): Id[] => {
    const key = state.navigationFilter.key;

    switch (state.navigationFilter.type) {
        case navigationFilterTypes.calendar:
            return (state.todos.idsByDueDate[key] || []) as Id[];
        case navigationFilterTypes.category:
            return (state.todos.idsByCategoryId[key as Id] || []) as Id[];
        case navigationFilterTypes.filter:
            return (state.todos.idsByFilterId[key] || []) as Id[];
        default:
            return [];
    }
};

export const getTodoListByNavigationFilter = (): Id[] => {
    return useTodoStore(getTodoListByNavigationFilterSelector) || emptyList;
};
