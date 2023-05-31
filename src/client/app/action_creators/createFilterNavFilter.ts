import { navigationFilterTypes } from '../../domain/entities/navigationFilter';

export function createFilterNavFilter(key: string, filter: string): NavigationFilter {
    return {
        type: navigationFilterTypes.filter,
        title: filter,
        key,
    };
}
