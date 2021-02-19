import { makeStyles } from '@material-ui/core';
import React, { useState } from 'react';
import clsx from 'clsx';
import NinjaButton from '../button/NinjaButton';

const styles = makeStyles(() => ({
  emoji: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  span: {
    fontSize: '100px',
    margin: 0,
    transition: 'opacity 0.5s ease-in-out',
    position: 'absolute',
    top: '750px'
  },
  spanShow: { opacity: 1 },
  spanHide: { opacity: 0 }
}));

const EmojiCarousel = () => {
  const [happy, setHappy] = useState(true);
  const classes = styles();
  const happyClass = clsx(classes.span, {
    [classes.spanShow]: happy,
    [classes.spanHide]: !happy,
  });
  const sadClass = clsx(classes.span, {
    [classes.spanShow]: !happy,
    [classes.spanHide]: happy,
  });

  return (
    <div className={classes.emoji}>
      <NinjaButton
        onClick={() => setHappy(!happy)}
        text={happy ? 'Make sad' : 'Make happy'}
      />
      <span role="img" aria-label="Happy" className={happyClass}>
        😀
      </span>
      <span role="img" aria-label="Sad" className={sadClass}>
        😭
      </span>
    </div>
  );
};

export default EmojiCarousel;
