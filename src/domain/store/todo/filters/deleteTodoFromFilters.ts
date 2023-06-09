import { NavigationFiltersKey } from '../../navigationFilter/index.ts';

export function deleteTodoFromFilters(state: TodoState, filters: NavigationFiltersKey[], todo: Todo): void {
    filters.forEach((filter) => {
        const filterIds = state.idsByFilterId[filter];
        const idx = filterIds.indexOf(todo.todo_id);

        if (idx > -1) {
            const newFilterIds = [...filterIds];
            newFilterIds.splice(idx, 1);
            state.idsByFilterId[filter] = newFilterIds;
        }
    });
}
