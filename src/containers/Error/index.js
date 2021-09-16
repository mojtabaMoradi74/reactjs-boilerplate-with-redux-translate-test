import React from 'react';
import { FormattedMessage } from 'react-intl';

const Error = () => (
    <section>
        <h1>
            <FormattedMessage id="error.title" />
        </h1>
        <div>
            <FormattedMessage id="error.content" />
        </div>
    </section>
);

export default Error;