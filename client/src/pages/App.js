import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../components/header/Header';
import { ErrorBoundary } from '../components';
import NinjaButton, { NinjaButtonSec, NinjaButtonTer } from '../components/button/NinjaButton';
import { withStyles } from '@material-ui/core';
import { globalStyle } from '../utils/global';
import SignupModal from '../components/modal/Modal';
import EmojiCarousel from '../components/carousel/Carousel';

function App() {
  const [show, setShowModal] = useState(false);

  return (
    <ErrorBoundary>
      <CssBaseline />
      <Header />
      <NinjaButton text="Primary Button" />
      <NinjaButtonSec text="Secondary Button" />
      <NinjaButtonTer text="Tertiary Button" onClick={() => setShowModal(!show)} />
      <SignupModal show={show} onShow={() => setShowModal(!show)} />
      <EmojiCarousel />
    </ErrorBoundary>
  );
}

export default withStyles(globalStyle)(App);
