import { makeStyles } from '@material-ui/core';

const HeaderNavStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    '& > button': {
      textTransform: 'none',
    },
  },
}));

export default HeaderNavStyles;
