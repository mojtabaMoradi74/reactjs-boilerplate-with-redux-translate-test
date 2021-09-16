import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

const Summary = () => {

  const intl = useIntl();

  return (
    <section>
      <h1>
        <FormattedMessage id="summary.title" />
      </h1>
      <div>

      </div>
    </section>
  );

};

export default Summary;