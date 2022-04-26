import React from 'react';
import { useTranslation } from 'react-i18next';

const TotalCompleteItems = ({ todos }) => {

	const [t] = useTranslation();

	return <h4 className='mt-3'>{t('global.total-complete-items')}: {todos?.length || 0}</h4>;
};

export default TotalCompleteItems;
