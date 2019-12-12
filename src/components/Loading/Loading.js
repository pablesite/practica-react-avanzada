import React from 'react';
import T from 'prop-types';
import classNames from 'classnames';

import './styles.css';

export default function Loading({ className }) {
  return (
    <div className={classNames('loading', className)}>
      <div className="spinner"></div>
    </div>
  );
}

Loading.propTypes = {
  className: T.string,
};
