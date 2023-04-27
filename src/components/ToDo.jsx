import React from "react";
import 'animate.css';

const ToDo = ({ name, id, completed, removeTodo, completeTodo }) => {
    let style_input =
        " block w-full p-4 pl-10 text-sm text-gray-900 border rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500";
    if (completed) {
        style_input = "block w-full p-4 pl-10 text-sm text-gray-900 border rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-gray-800 border-gray-500 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500 line-through";
    }

    return (
        <div className="2xl:mr-96 2xl:ml-96 mt-4 lg:mr-80 lg:ml-80 sm:ml-32 sm:mr-32 mr-10 ml-10 animate__slideInUp animate__animated bg-gray-800">
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
                            d="M5.25 8.25h15m-16.5 7.5h15m-1.8-13.5l-3.9 19.5m-2.1-19.5l-3.9 19.5"
                        />
                    </svg>
                </div>
                <input
                    type="search"
                    id="default-search"
                    value={name}
                    className={style_input}
                    disabled
                />
                <button
                    onClick={() => completeTodo(id)}
                    type="submit"
                    className="text-white absolute right-16 bottom-2.5 bg-emerald-600 hover:bg-emerald-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-emerald-600 dark:hover:bg-emerald-500 dark:focus:ring-blue-800">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-4 h-4">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M4.5 12.75l6 6 9-13.5"
                        />
                    </svg>
                </button>
                <button
                    onClick={() => removeTodo(id)}
                    type="submit"
                    className="text-white absolute right-2.5 bottom-2.5 bg-red-700 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-red-700 dark:hover:bg-red-600 dark:focus:ring-blue-800">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-4 h-4">
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
};
export default ToDo;
