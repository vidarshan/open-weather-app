import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MantineProvider } from '@mantine/core';

ReactDOM.render(
  <MantineProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </MantineProvider>,
  document.getElementById('root')
);
reportWebVitals();
