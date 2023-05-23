import { inboxKey, navigationFilterTypes, overdueKey, recycleBinKey } from '../../../domain/navigationFilter/index.ts';

// components
import NavigationPanelItemContainer from '../PanelItem';
import FiltersSection from '../../../../ui/NavPanel/FiltersSection';

const topFilters = [inboxKey, overdueKey, recycleBinKey];

function FiltersSectionContainer() {
    return (
        <FiltersSection>
            {topFilters.map((key) => (
                <NavigationPanelItemContainer key={key} id={key} navigationType={navigationFilterTypes.filter} />
            ))}
        </FiltersSection>
    );
}

export default FiltersSectionContainer;
