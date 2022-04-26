import React from 'react';
import { Button } from 'reactstrap';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const TodoItem = ({ id, title, completed, handleCheckboxClick = () => { }, handleDeleteClick = () => { } }) => {

	const [t] = useTranslation();

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

				<Button onClick={() => handleDeleteClick({ id })} color="danger">{t('global.delete')}</Button>
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
