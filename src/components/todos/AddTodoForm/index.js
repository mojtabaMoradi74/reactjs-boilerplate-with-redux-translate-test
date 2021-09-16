import React, { useState } from 'react';
import { useIntl } from 'react-intl';
import { Button } from 'reactstrap';
import styles from './styles';

const AddTodoForm = ({ submitted }) => {

	const { formatMessage } = useIntl();
	const [value, setValue] = useState('');

	const onSubmit = (event) => {
		event.preventDefault();
		if (value) submitted(value)
	};


	return (
		<styles.form onSubmit={onSubmit} >
			{/* <styles.label className='sr-only'>{formatMessage({ id: 'name' })}</styles.label> */}
			<styles.div_flex>
				<input
					type='text'
					className='form-control  '
					placeholder={`${formatMessage({ id: 'add.todo' })}...`}
					value={value}
					onChange={(event) => setValue(event.target.value)}
				/>
				<Button type='submit' color="primary">	{formatMessage({ id: 'submit' })}</Button>
			</styles.div_flex>
		</styles.form>
	);
};

export default AddTodoForm;
