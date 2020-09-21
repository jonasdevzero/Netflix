import React from 'react';
import { render } from 'react-dom';

import 'normalize.css'

import App from './App';
import { firebase } from './lib/firebase.production'
import { FirebaseContext } from './context/firebase'

import { GlobalStyles } from './globalStyles'

render(
    <>
        <FirebaseContext.Provider value={{ firebase }}>
            <GlobalStyles />
            <App />
        </FirebaseContext.Provider>
    </>
    , document.getElementById('root'));