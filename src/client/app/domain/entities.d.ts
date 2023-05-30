type Id = number;

type IconName = string;

type Icon = {
    icon_id: Id;
    icon_name: IconName;
};
type IconFields = keyof Icon;

type StatusName = string;
type StatusColor = string;

type Status = {
    status_id: Id;
    status: StatusName;
    color: StatusColor;
};

type CategoryIconId = Id;
type CategoryName = string;

type Category = {
    category_id: Id;
    icon_id: CategoryIconId;
    category: CategoryName;
};

type NewCategory = Omit<Category, 'category_id'>;

type TodoStatusId = number;
type TodoCategoryId = Id | undefined;
type TodoTodo = string;
type TodoDescription = string | undefined;
type TodoDueDate = string | undefined;
type TodoDeleted = boolean | undefined;
type TodoCompleted = boolean | undefined;

type Todo = {
    todo_id: Id;
    todo: TodoTodo;
    status_id: TodoStatusId;
    category_id?: TodoCategoryId;
    description?: TodoDescription;
    due_date?: TodoDueDate;
    deleted?: TodoDeleted;
    completed?: TodoCompleted;
};

type NewTodo = Omit<Todo, 'todo_id'>;

type OneOfEntities = Category | Status | Category | Todo;

type Entities = {
    todos?: Todo[];
    categories?: Category[];
    statuses?: Status[];
    icons?: Icon[];
};
