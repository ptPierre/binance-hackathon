import React from 'react';
import { Button } from '@material-ui/core';
import { string, arrayOf, shape } from 'prop-types';

const HeaderNavButtons = ({ color = 'inherit', navItems, ...props }) => (
  <div style={{ display: 'flex' }}>
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

HeaderNavButtons.propTypes = {
  color: string,
  navItems: arrayOf(
    shape({
      text: string.isRequired,
      href: string,
    }),
  ),
};

export default HeaderNavButtons;
