import { makeStyles } from '@material-ui/core';

const HeaderNavStyles = makeStyles(() => ({
  root: {
    display: 'flex'
  },
  logo: {
    width: 40,
    color: 'white',
    transform: 'scaleX(-1)',
    margin: '0 20px 0 10px',
  }
}));

export default HeaderNavStyles;
