import React from 'react';
import { Button } from '@material-ui/core';
import { string, arrayOf, shape } from 'prop-types';
import HeaderNavStyles from './HeaderNav.style';

const HeaderNav = ({ color = 'inherit', navItems, ...props }) => {
  const { root } = HeaderNavStyles();

  return (
    <div className={root}>
      {navItems.map((item, index) => (
        <Button
          key={`${index}-${item}`}
          color={color}
          {...props}
        >
          {item.text}
        </Button>
      ))}
    </div>
  );
}

HeaderNav.propTypes = {
  color: string,
  navItems: arrayOf(
    shape({
      text: string.isRequired,
      href: string,
    }),
  ),
};

export default HeaderNav;
