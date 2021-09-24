import React from 'react';
import { useIntl } from 'react-intl';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';

const TodoItem = ({ id, title, completed, handleCheckboxClick = () => { }, handleDeleteClick = () => { } }) => {

	const { formatMessage } = useIntl();

	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input
						type='checkbox'
						className='mr-3'
						defaultChecked={completed}
						onClick={() => handleCheckboxClick({ id, completed })}
					/>
					<span className='ml-1 mr-1'>{title}</span>
				</span>

				<Button onClick={() => handleDeleteClick({ id })} color="danger">{formatMessage({ id: 'delete' })}</Button>
			</div>
		</li>
	);
};


TodoItem.propTypes = {
	id: PropTypes.string,
	title: PropTypes.string,
	completed: PropTypes.bool,
	handleCheckboxClick: PropTypes.func,
	handleDeleteClick: PropTypes.func,
}

TodoItem.defaultProps = {
	handleCheckboxClick: () => { },
	handleDeleteClick: () => { },
}

export default TodoItem;
