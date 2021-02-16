import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import HeaderStyles from './Header.style';
import HeaderNav from '../header-nav/HeaderNav';
import HeaderLogo from '../header-logo/HeaderLogo';
import HeaderControls from '../header-controls/HeaderControls';

const navItems = [
  { text: 'Swap' },
  { text: 'Pool' },
  { text: 'Stake' },
  { text: 'Vote' },
];

const Header = () => {
  const { toolBar } = HeaderStyles();

  return (
    <AppBar position="static">
      <Toolbar className={toolBar}>
        <HeaderLogo text="NinjaSwap" />
        <HeaderNav navItems={navItems} />
        <HeaderControls />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
