import React from 'react';
import { useIntl } from 'react-intl';

const TotalCompleteItems = ({ todos }) => {

	const { formatMessage } = useIntl();

	return <h4 className='mt-3'>{formatMessage({ id: 'total-complete-items' })}: {todos?.length || 0}</h4>;
};

export default TotalCompleteItems;
