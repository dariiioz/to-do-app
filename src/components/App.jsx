import React, { useEffect } from "react";
import "animate.css";
import InputTask from "./InputTask";
import { useState } from "react";
import ToDo from "./ToDo";

function App() {
    const [todos, setTodos] = useState(
        JSON.parse(localStorage.getItem("todos")) || []
    );

    // Get todos from local storage if they exist
    useEffect(() => {
        const localTodos = JSON.parse(localStorage.getItem("todos"));
        if (localTodos) {
            setTodos(localTodos);
        }
    }, []);

    // Save todos to local storage

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
        //console.log("todos:", todos);
    }, [todos]);

    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const completeTodo = (id) => {
        setTodos(
            todos.map((todo) => {
                if (todo.id === id) {
                    return {
                        ...todo,
                        completed: !todo.completed,
                    };
                }
                return todo;
            })
        );
    };

    return (
        <div className="h-screen bg-gray-900 pt-40">
            <h1 className="text-center pt-36 text-white animate__fadeInDownBig animate__animated">
                To-Do App
            </h1>
            <h2 className="text-center sm:text-lg text-white animate__animated animate__fadeIn">
                Type your task in the input field and press enter to add it to
                the list.
            </h2>
            <InputTask inputTodo={setTodos} />

            {todos.map((todo) => (
                <ToDo
                    key={todo.id}
                    name={todo.name}
                    completed={todo.completed}
                    id={todo.id}
                    removeTodo={removeTodo}
                    completeTodo={completeTodo}
                />
            ))}
        </div>
    );
}

export default App;
