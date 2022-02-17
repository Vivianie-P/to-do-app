import React from "react";
import "./todo.css";
import { GoTrashcan } from "react-icons/go";
import { FaRegEdit } from "react-icons/fa";
import { CgCheckR } from "react-icons/cg";
import { MdDoneOutline } from "react-icons/md";

const todo = ({
	text,
	todo,
	todos,
	setTodos,
	setEditing,
	editing,
	setEditText,
	editText,
}) => {
	const deleteBtn = () => {
		setTodos(todos.filter((el) => el.id !== todo.id));
	};

	const completeBtn = () => {
		setTodos(
			todos.map((item) => {
				if (item.id === todo.id) {
					return {
						...item,
						completed: !item.completed,
					};
				}
				return item;
			})
		);
	};

	const inputTextHandler = (e) => {
		setEditText(e.target.value);
	};

	const editTodoHandler = (e) => {
		e.preventDefault();
		if (editText === "") {
			console.log(editText);
			setEditing({ id: null });
		} else {
			setTodos(
				todos.map((item) => {
					if (item.id === editing.id) {
						return {
							...item,
							text: editText,
						};
					}
					return item;
				})
			);

			setEditText("");
			setEditing({ id: null, value: "" });
		}
	};

	return (
		<div className="inner-todo-container">
			{editing.id === todo.id ? (
				<form>
					<input
						value={editText}
						type="text"
						className="edited-todo-input"
						placeholder="Edit todo"
						onChange={inputTextHandler}
						autoFocus
					/>
					<button onClick={editTodoHandler} className="todo-button" type="submit">
						<MdDoneOutline /> <i className="edited-form-btn"></i>
					</button>
				</form>
			) : (
				<div className="todo">
					<button onClick={completeBtn} className="complete-btn">
						<CgCheckR />
					</button>

					<div className="todo-item-container">
						<li className={`todo-item ${todo.completed ? "completed" : ""}`}>
							{text}
						</li>
					</div>

					<div className="edit-and-trash-container">
						<button
							className="edit-btn"
							onClick={() => {
								setEditing({ id: todo.id, value: todo.text });
							}}
						>
							<i className="fa-edit">
								<FaRegEdit />
							</i>
						</button>
						<button onClick={deleteBtn} className="trash-btn">
							<i className="">
								<GoTrashcan />
							</i>
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default todo;
