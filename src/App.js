import React from "react";
import "./App.css";
import dayjs from "dayjs";
import TodoForm from "./components/todoForm";
import TodoList from "./components/todoList";
import { useState, useEffect } from "react";

function App() {
	let current = new Date();
	let today = current.toLocaleDateString("en-US", { weekday: "long" });
	// console.log(today);
	let today2 = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(
		current
	);

	const date = dayjs(new Date()).format("MMMM  DD, YYYY");

	const [inputText, setInputText] = useState("");
	const [editText, setEditText] = useState("");
	const [todos, setTodos] = useState(
		JSON.parse(localStorage.getItem("todos")) || []
	);
	const [status, setStatus] = useState("all");
	const [filteredTodos, setFilteredTodos] = useState([]);
	const [editing, setEditing] = useState({ id: null, value: "" });

	const filterHandler = () => {
		switch (status) {
			case "completed":
				setFilteredTodos(todos.filter((todo) => todo.completed === true));
				break;
			case "uncompleted":
				setFilteredTodos(todos.filter((todo) => todo.completed === false));
				break;
			default:
				setFilteredTodos(todos);
				break;
		}
	};

	const saveLocalTodos = () => {
		localStorage.setItem("todos", JSON.stringify(todos));
	};

	useEffect(() => {
		filterHandler();
		saveLocalTodos();
	}, [todos, status]);

	const getLocalTodos = () => {
		if (localStorage.getItem("todos") === null) {
			localStorage.setItem("todos", JSON.stringify([]));
		} else {
			let todoLocal = JSON.parse(localStorage.getItem("todos"));
			setTodos(todoLocal);
		}
	};

	useEffect(() => {
		getLocalTodos();
	}, []);

	return (
		<div className="App">
			<div className="day-date">
				{today2} {date}
			</div>
			<div className="header">What's the plan for today?</div>
			<div className="full-todo">
				<TodoForm
					inputText={inputText}
					todos={todos}
					setTodos={setTodos}
					setInputText={setInputText}
					setStatus={setStatus}
					editing={editing}
					setEditing={setEditing}
				/>
				<TodoList
					todos={todos}
					setTodos={setTodos}
					filteredTodos={filteredTodos}
					editing={editing}
					setEditing={setEditing}
					setEditText={setEditText}
					editText={editText}
				/>
			</div>
		</div>
	);
}

export default App;
