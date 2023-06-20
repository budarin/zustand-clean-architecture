let state: Entities = {
    todos: [] as Todo[],
    categories: [] as Category[],
    statuses: [] as Status[],
    icons: [] as Icon[],
};

export function getState() {
    return state;
}

export function setState(newSate: Entities) {
    state = newSate;
}
