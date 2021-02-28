import React from 'react';
import { Logo } from '../../assets';
import HeaderLogoStyles from './HeaderLogo.style';
import { Typography } from '@material-ui/core';
import { string } from 'prop-types';

const HeaderLogo = ({ text }) => {
  const { logo, root } = HeaderLogoStyles();

  return (
    <div className={root} style={{ marginRight: '3rem' }}>
      <Logo className={logo} />
      <Typography
        style={{
          fontSize: 16,
          alignSelf: 'center',
        }}
      >
        {text}
      </Typography>
    </div>
  );
};

HeaderLogo.propTypes = {
  text: string
}

export default HeaderLogo;
