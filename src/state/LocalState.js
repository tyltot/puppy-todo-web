const cacheKey = 'puppyKey';

const parseJsonSafe = (obj) => {
    let json;
    try {
        json = JSON.parse(obj);
    } catch (ignore) { /* not json */ }

    return json || {};
}

const getJsonState = () => parseJsonSafe(localStorage.getItem(cacheKey));

const invalidateCache = () => localStorage.removeItem(cacheKey);

const saveItem = (key, value) => {
    const item = {
        ...getJsonState(),
        [key]: value
    };

    localStorage.setItem(cacheKey, JSON.stringify(item));
}

const getInitialState = (initial) => {
    let todos = getTodos();

    if (todos.length === 0) {
        addTodo(initial);
        todos.push(initial);
    }

    return todos;
}

const getTodos = () => getJsonState().todos || [];

const addTodo = (value) => saveItem('todos', [...getTodos(), value]);

const removeTodo = (value) => saveItem('todos', getTodos().filter(item => item !== value));

export default {
    getInitialState,
    getTodosFromState: getTodos,
    addTodoToState: addTodo,
    removeTodoFromState: removeTodo,
    invalidateCache,
};