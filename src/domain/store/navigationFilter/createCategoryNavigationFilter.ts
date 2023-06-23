import { navigationFilterTypes } from './index.ts';

export function createCategoryNavigationFilter(id: Id, category: string): NavigationFilter {
    return {
        type: navigationFilterTypes.category,
        title: category,
        key: id,
    };
}
