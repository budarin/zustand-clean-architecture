import {
    inboxKey,
    navigationFilterTypes,
    overdueKey,
    recycleBinKey,
} from '../../../../../../src/domain/entities/navigationFilter/index.ts';

// components
import NavigationPanelItemContainer from '../PanelItem/index.tsx';
import FiltersSection from '../../../../ui/NavPanel/FiltersSection/index.tsx';

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
