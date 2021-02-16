import { makeStyles } from '@material-ui/core';

const HeaderLogoStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    marginRight: '3rem',
    '&:hover': {
      cursor: 'pointer'
    }
  },
  logo: {
    width: 40,
    color: 'white',
    margin: '0 10px 0 10px',
  },
}));

export default HeaderLogoStyles;
