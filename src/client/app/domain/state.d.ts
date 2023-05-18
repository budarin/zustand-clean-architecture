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
