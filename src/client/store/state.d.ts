type TodoIdsByCategoryId = Record<Id, Id[]>;
type TodoIdsByCategoryIdKey = keyof TodoIdsByCategoryId;

type TodoIdsByFilterId = Record<NavigationFilterKey, Id[]>;
type TodoIdsByFilterIdKey = keyof TodoIdsByFilterId;

type TodoById = Record<Id, Todo>;
type TodoState = {
    byId: TodoById;
    ids: Id[];
    idsByCategoryId: TodoIdsByCategoryId;
    idsByFilterId: TodoIdsByFilterId;
};

type CategoriyById = Record<Id, Categoriy>;
type CategoriyState = {
    byId: CategoriyById;
    ids: Id[];
};

type StatusById = Record<Id, Status>;
type StatusState = {
    byId: StatusById;
    ids: Id[];
};

type IconById = Record<Id, Icon>;
type IconState = {
    byId: IconById;
    ids: Id[];
};

type State = {
    icons: IconState;
    statuses: StatusState;
    categories: CategoriyState;
    todos: TodoState;
    navigationFilter: NavigationFilter;
};

type Action = {
    type: string;
    payload?: UnknownObject;
};
