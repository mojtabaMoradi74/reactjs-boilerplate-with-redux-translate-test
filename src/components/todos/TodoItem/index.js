import React from 'react';
import { useIntl } from 'react-intl';
import { Button } from 'reactstrap';

const TodoItem = ({ id, title, completed, handleCheckboxClick, handleDeleteClick }) => {

	const { formatMessage } = useIntl();

	return (
		<li className={`list-group-item ${completed && 'list-group-item-success'}`}>
			<div className='d-flex justify-content-between'>
				<span className='d-flex align-items-center'>
					<input
						type='checkbox'
						className='mr-3'
						checked={completed}
						onClick={() => handleCheckboxClick(id, completed)}
					/>
					<span className='ml-1 mr-1'>	{title}</span>
				</span>

				<Button onClick={() => handleDeleteClick(id)} color="danger">	{formatMessage({ id: 'delete' })}</Button>
			</div>
		</li>
	);
};

export default TodoItem;
