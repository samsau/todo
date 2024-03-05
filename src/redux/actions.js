const {
	ADD_TODO,
	TOGGLE_TODO,
	REMOVE_TODO,
	MARK_COMPLETE,
	MARK_INCOMPLETE,
	FILTER_TODO,
	MARK_ALL_COMPLETED,
	UPDATE_SEARCHED_TERM,
} = require("./actionTypes");

export const addTodo = (text) => ({
	type: ADD_TODO,
	payload: { text },
});

export const toggleTodo = (id) => ({
	type: TOGGLE_TODO,
	payload: { id },
});

export const removeTodo = (id) => ({
	type: REMOVE_TODO,
	payload: { id },
});

export const markComplete = (id) => ({
	type: MARK_COMPLETE,
	payload: { id },
});

export const markIncomplete = (id) => ({
	type: MARK_INCOMPLETE,
	payload: { id },
});

export const filterTodo = (filter) => ({
	type: FILTER_TODO,
	payload: { filter },
});

export const markAllCompleted = () => ({
	type: MARK_ALL_COMPLETED,
});

export const updateSearchedTerm = (searchTerm) => ({
	type: UPDATE_SEARCHED_TERM,
	payload: { searchTerm },
});
