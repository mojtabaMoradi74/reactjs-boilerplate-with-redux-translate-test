import React, { Children } from 'react';
import TodoItem from '../TodoItem';
import PropTypes from 'prop-types';
const TodoList = ({ todos, ...prop }) => {


	return (
		<ul className='list-group'>
			{
				Children.toArray(todos?.map((todo) => (
					<TodoItem id={todo.id} title={todo.title} completed={todo.completed} {...prop} />
				)))
			}
		</ul>
	);
};

TodoList.propTypes = {
	todos: PropTypes.array,

}

TodoList.defaultProps = {
	todos: [],
}

export default TodoList;
