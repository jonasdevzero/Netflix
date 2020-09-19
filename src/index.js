import React from 'react';
import { render } from 'react-dom';

import 'normalize.css'

import App from './App';

import { GlobalStyles } from './globalStyles'

render(
    <>
        <GlobalStyles />
        <App />
    </>
,document.getElementById('root'));