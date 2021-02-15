import React from 'react';
import HeaderNavButtons from './HeaderNavButtons';
import { Logo } from '../../assets/icons';
import HeaderNavStyles from './HeaderNav.style';

const navItems = [
  { text: 'Swap' },
  { text: 'Pool' },
  { text: 'Stake' },
  { text: 'Vote' }
];

const HeaderNav = () => {
  const { logo, root } = HeaderNavStyles();

  return (
    <div className={root}>
      <Logo className={logo} />
      <HeaderNavButtons navItems={navItems} />
    </div>
  );
}

export default HeaderNav;
