import React from 'react';
import T from 'prop-types';
import classNames from 'classnames';

import './styles.css';

export default function Loading({ className, error }) {
  return (
    <div className={classNames('error', className)}>
      Oooops! Something went wrong:{' '}
      <strong className="error-message">{error.message}</strong>Please, reload
      page.
    </div>
  );
}

Loading.propTypes = {
  error: T.instanceOf(Error).isRequired,
  className: T.string,
};
