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
