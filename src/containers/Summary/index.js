import React from 'react';
import { useTranslation } from 'react-i18next';

const Summary = () => {

  const [t] = useTranslation();

  return (
    <section>
      <h1>
        {t('summary.title')}
      </h1>
      <div>

      </div>
    </section>
  );

};

export default Summary;