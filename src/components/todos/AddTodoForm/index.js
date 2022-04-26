import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useIntl } from 'react-intl';
import { Button } from 'reactstrap';
import styles from './styles';

const AddTodoForm = ({ submitted }) => {

	const [t] = useTranslation();

	const [value, setValue] = useState('');

	const onSubmit = (event) => {
		event.preventDefault();
		submitted(value)
		// try {
		// 	submitted(value)
		// } catch (err) {
		// 	console.log('Submit error: ', err);
		// }

	};


	return (
		<styles.form onSubmit={onSubmit} >
			{/* <styles.label className='sr-only'>{t({ id: 'name' })}</styles.label> */}
			<styles.div_flex>
				<input
					type='text'
					className='form-control  add-input'
					placeholder={`${t('global.add-todo')}...`}
					value={value}
					onChange={(event) => setValue(event.target.value)}
				/>
				<Button type='submit' color="primary">	{t('global.submit')}</Button>
			</styles.div_flex>
		</styles.form>
	);
};

export default AddTodoForm;
