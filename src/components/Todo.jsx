import { useState } from "react";
import { BsPlus, BsSearch } from "react-icons/bs"
import { addTodo, updateSearchedTerm } from "../redux/actions";
import { useDispatch } from "react-redux";
import { FilterButton } from "./FilterButton";
import { TodoList } from "./TodoList";
export const Todo = ()=>{
    const dispatch = useDispatch();
    const [newTodoText, setNewTodoText] = useState("");
    const [searchTerm, setSearchTerm] = useState("");
    // console.log(newTodoText);
    const handleAddTodo = (text) => {
        dispatch(addTodo(text));
    }
    const handleAddTodoClick = () => {
        if(newTodoText.trim() !== ""){
            handleAddTodo(newTodoText.trim());
            setNewTodoText("");
        }
    } 

    const handleSearchChange = (value) => {
        setSearchTerm(value);
        dispatch(updateSearchedTerm(value));
    }
    return (

        <div  className='max-w-4xl mx-auto sm:mt-8 p-4 bg-gray-100 rounded'>
            <h1 className="mt-3 mb-6 text-2xl font-bold text-center">Personal TODO App</h1>
            
            {/* input text and button */}
            <div className="flex item-center mb-4">
                <input value={newTodoText} onChange={(e) => setNewTodoText(e.target.value)} type="text" name="addTodoInput" id="addTodoInput" placeholder="Add Todo"
                className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"/>
                <button onClick={handleAddTodoClick} className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"><BsPlus /></button>
            </div>

            {/* filter by text/ search text */}
            <div className="flex items-center justify-between">
                <FilterButton></FilterButton>
                <div className="flex item-center">
                <input value={searchTerm} onChange={(e) => handleSearchChange(e.target.value)} type="text" name="addTodoInput" id="addTodoInput" placeholder="Search Todo"
                className="flex-grow p-2 border-b-2 border-gray-300 focus:outline-none focus:border-blue-500"/>
                <button className="ml-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"><BsSearch /></button>
                </div>
            </div>

            {/* Add new todo List */}
            <div>
                <TodoList />
            </div>
        </div>
    );
}