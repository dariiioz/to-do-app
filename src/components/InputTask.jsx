import React from "react";
import { useState } from "react";

const InputTask = ({ inputTodo }) => {
    const [input, setInput] = useState("");

    const handleSubmit = (e) => {
        const todos = JSON.parse(localStorage.getItem("todos"));
        const todolength = todos.length;
        console.log(todolength);

        e.preventDefault();
        inputTodo((prev) => [
            ...prev,
            {
                id: todolength + 1,
                name: input,
                completed: false,
            },
        ]);
        setInput("");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="2xl:mr-96 2xl:ml-96 mt-4 lg:mr-80 lg:ml-80 sm:ml-32 sm:mr-32 mr-10 ml-10">
            <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                Add task
            </label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-5 h-5 text-gray-500 dark:text-gray-400">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                </div>
                <input
                    onChange={(e) => {
                        setInput(e.target.value);
                    }}
                    type="search"
                    id="default-search"
                    className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Buy baguette"
                    required
                />
                <button
                    type="submit"
                    className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    Add Task
                </button>
            </div>
        </form>
    );
};
export default InputTask;
