import axe from '@axe-core/react';

const a11y = (React, ReactDOM, delay) => {
  if (process.env.NODE_ENV !== 'production') {
    axe(React, ReactDOM, delay);
  }
}

export default a11y;
