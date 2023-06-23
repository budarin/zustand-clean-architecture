type Timestamp = number;

type TodoIdsByCategoryId = Record<Id, Readonly<Id[]>>;
type TodoIdsByCategoryIdKey = keyof TodoIdsByCategoryId;

type TodoIdsByFilterId = Record<NavigationFilterKey, Readonly<Id[]>>;
type TodoIdsByFilterIdKey = keyof TodoIdsByFilterId;

type ExtendedTodo = Todo & {
    due_date_ts?: Timestamp;
    due_date_time_ts?: Timestamp;
} & (
        | {
              due_date: string;
              due_date_ts: Timestamp;
              due_date_time_ts: Timestamp;
          }
        | {
              due_date?: undefined;
              due_date_ts?: undefined;
              due_date_time_ts?: undefined;
          }
    );

type TodoById = Record<Id, ExtendedTodo>;
type TodoState = {
    byId: TodoById;
    ids: Readonly<Id[]>;
    idsByDueDate: Reacord<Timestamp, Readonly<Id[]>>;
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

type NavigationPanelItemType = FilterNavigationFilter['type'] | CategoryNavigationFilter['type'];

type TodosState = {
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
