import { navigationFilterTypes } from './index.ts';

export function createFilterNavFilter(key: string, filter: string): NavigationFilter {
    return {
        type: navigationFilterTypes.filter,
        title: filter,
        key,
    };
}
