import { useSelector } from "react-redux";
import { TodoItem } from "./TodoItem";

export const TodoList = () => {
    const filteredTodos = useSelector((state) => {
        const todos = state.todos;
        const filter = state.filter;
        const searchTerm = state.searchTerm;

        return todos.filter((todo) => {
            const matchFilter = (filter === "COMPLETED" && todo.completed) || (filter === "INCOMPLETED" && !todo.completed) || (filter === "ALL");
            const matchSearch = todo.text.toLowerCase().includes(searchTerm);
            return matchFilter && matchSearch;
        })
    })
    console.log("filtered Todos", filteredTodos);
    return(
        <ul>
            {
                filteredTodos.map((todo, index) => (
                    <TodoItem key={index} todo={todo} index={index}/>
                ))
            }
        </ul>
    );
}