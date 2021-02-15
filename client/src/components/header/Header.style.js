import { makeStyles } from "@material-ui/core";

const HeaderStyles = makeStyles(() => ({
  header: {
    backgroundColor: ''
  },
  logo: {
    width: 40,
    color: 'white',
    transform: 'scaleX(-1)',
    margin: '0 20px 0 10px'
  },
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100vw',
    margin: 'auto',
    maxWidth: 1400
  }
}));

export default HeaderStyles;
