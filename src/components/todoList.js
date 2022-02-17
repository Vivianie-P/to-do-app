import React from "react";
import Todo from "./todo";
import "./todoList.css";

const todoList = ({
	todos,
	setTodos,
	filteredTodos,
	editing,
	setEditing,
	setEditText,
	editText,
}) => {
	return (
		<div className="todo-container">
			<ul className="todo-list">
				{filteredTodos.map((todo) => (
					<Todo
						todo={todo}
						todos={todos}
						setTodos={setTodos}
						key={todo.id}
						text={todo.text}
						setEditing={setEditing}
						editing={editing}
						setEditText={setEditText}
						editText={editText}
					/>
				))}
			</ul>
		</div>
	);
};

export default todoList;
