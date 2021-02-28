import { makeStyles } from "@material-ui/core";

const HeaderStyles = makeStyles(() => ({
  toolBar: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100vw',
    margin: 'auto',
    maxWidth: 1400
  }
}));

export default HeaderStyles;
