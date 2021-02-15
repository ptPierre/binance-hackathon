import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import HeaderStyles from './Header.style';
import HeaderNav from './HeaderNav';

const Header = () => {
  const { header, toolBar } = HeaderStyles();

  return (
    <header>
      <AppBar className={header} position="static">
        <Toolbar className={toolBar}>
          <HeaderNav />
        </Toolbar>
      </AppBar>
    </header>
  );
}

export default Header;
