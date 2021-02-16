import React from 'react';
import { Button } from '@material-ui/core';
import HeaderControlsStyles from './HeaderControls.style';
import { AccountCircleOutlined } from '@material-ui/icons';

const HeaderControls = () => {
  const { wallet } = HeaderControlsStyles();

  return (
    <div>
      <Button
        variant="outlined"
        color="inherit"
        className={wallet}
        endIcon={<AccountCircleOutlined />}
      >
        Connect a Wallet
      </Button>
    </div>
  );
}

export default HeaderControls;
