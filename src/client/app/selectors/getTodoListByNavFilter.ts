import { useTodoStore } from '../domain/store';
import { navigationFilterTypes } from '../domain/navigationFilter';

const selector = (state: TodosState): Id[] => {
    const key = state.navigationFilter.key;

    switch (state.navigationFilter.type) {
        case navigationFilterTypes.calendar:
            return state.todos.idsByDueDate[key];
        case navigationFilterTypes.category:
            return state.todos.idsByCategoryId[key as Id] as Id[];
        case navigationFilterTypes.filter:
            return state.todos.idsByFilterId[key] as Id[];
        default:
            return [];
    }
};

const emptyList = [] as Id[];

export const getTodoListByNavFilter = (): Id[] => useTodoStore(selector) || emptyList;
