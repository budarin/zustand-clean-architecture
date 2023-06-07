import { navigationFilterTypes } from '../../../../src/domain/entities/navigationFilter';

export function createCategoryNavFilter(id: Id, category: string): NavigationFilter {
    return {
        type: navigationFilterTypes.category,
        title: category,
        key: id,
    };
}
