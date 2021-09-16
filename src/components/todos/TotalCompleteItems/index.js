import React from 'react';
import { useIntl } from 'react-intl';

const TotalCompleteItems = ({ todos }) => {

	const { formatMessage } = useIntl();

	return <h4 className='mt-3'>{formatMessage({ id: 'total-complete-items' })}: {todos.length}</h4>;
};

export default TotalCompleteItems;
