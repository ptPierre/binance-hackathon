import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from '../components/header/Header';
import { ErrorBoundary } from '../components';

function App() {
  return (
    <ErrorBoundary>
      <CssBaseline />
      <Header />
    </ErrorBoundary>
  );
}

export default App;
