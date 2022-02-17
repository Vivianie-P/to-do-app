import React from "react";
import "./todoForm.css";
import { HiOutlinePlus } from "react-icons/hi";

const TodoForm = ({
	setInputText,
	todos,
	setTodos,
	inputText,
	setStatus,
	editing,
	setEditing,
}) => {
	const inputTextHandler = (e) => {
		setInputText(e.target.value);
	};

	const submitTodoHandler = (e) => {
		e.preventDefault();
		setTodos([
			...todos,
			{ text: inputText, completed: false, id: Math.random() * 1000 },
		]);
		setInputText("");
	};

	const statusHandler = (e) => {
		setStatus(e.target.value);
	};

	return (
		<div className="form-container">
			<form>
				<div className="input-container">
					<input
						value={inputText}
						type="text"
						className="todo-input"
						placeholder="Enter todo"
						onChange={inputTextHandler}
						autoFocus
					/>
					<button onClick={submitTodoHandler} className="todo-button" type="submit">
						<HiOutlinePlus /> <i className="fas fa-plus-square"></i>
					</button>
					<div className="select">
						<div className="filter-todo">
							<select onChange={statusHandler} name="todos" className="filter-todo">
								<option value="all">All</option>
								<option value="completed">Completed</option>
								<option value="uncompleted">Uncompleted</option>
							</select>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};

export default TodoForm;
