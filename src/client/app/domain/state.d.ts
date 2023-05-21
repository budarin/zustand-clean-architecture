type TodoIdsByCategoryId = Record<Id, Readonly<Id[]>>;
type TodoIdsByCategoryIdKey = keyof TodoIdsByCategoryId;

type TodoIdsByFilterId = Record<NavigationFilterKey, Readonly<Id[]>>;
type TodoIdsByFilterIdKey = keyof TodoIdsByFilterId;

type TodoById = Record<Id, Todo>;
type TodoState = {
    byId: TodoById;
    ids: Readonly<Id[]>;
    idsByCategoryId: TodoIdsByCategoryId;
    idsByFilterId: TodoIdsByFilterId;
};

type CategoryById = Record<Id, Category>;
type CategoryState = {
    byId: CategoryById;
    ids: Readonly<Id[]>;
};

type StatusById = Record<Id, Status>;
type StatusState = {
    byId: StatusById;
    ids: Readonly<Id[]>;
};

type IconById = Record<Id, Icon>;
type IconState = {
    byId: IconById;
    ids: Readonly<Id[]>;
};

type Timestamp = number;

type FilterNavigationFilter = {
    type: 'filter';
    title: string;
    key: string;
};
type CategoryNavigationFilter = {
    type: 'category';
    title: string;
    key: Id;
};
type CalendarNavigationFilter = {
    type: 'calendar';
    title: string;
    key: Timestamp;
};

type NavigationFilter = FilterNavigationFilter | CategoryNavigationFilter | CalendarNavigationFilter;
type NavigationFilterType = NavigationFilter['type'];
type NavigationFilterKey = NavigationFilter['key'];

type State = {
    icons: IconState;
    statuses: StatusState;
    categories: CategoryState;
    todos: TodoState;
    navigationFilter: Readonly<NavigationFilter>;
};

type Action = {
    type: string;
    payload?: UnknownObject;
};
