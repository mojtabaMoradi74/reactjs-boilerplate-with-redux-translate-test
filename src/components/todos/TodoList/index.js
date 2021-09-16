import React from 'react';
import TodoItem from '../TodoItem';

const TodoList = ({ todos, ...prop }) => {


	return (
		<ul className='list-group'>
			{
				todos?.map((todo) => (
					<TodoItem id={todo.id} title={todo.title} completed={todo.completed} {...prop} />
				))
			}
		</ul>
	);
};

export default TodoList;
