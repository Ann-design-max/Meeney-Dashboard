import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import {ThemeProvider } from '@mui/material/styles';
import Theme from './theme'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
    <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

