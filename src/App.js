import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom'

import * as ROUTES from './constants/routes'
import useAuthListener from './hooks/useAuthListener.js' 

import { IsUserRedirect, ProtectedRoute } from './helpers/routes'
import { Home, Browse, Signin, Signup } from './pages'

function App() {
  const { user } = useAuthListener()

  return (
    <Router>
      <Switch>    
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_IN}>
          <Signin />
        </IsUserRedirect>
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.SIGN_UP}>
          <Signup />
        </IsUserRedirect>
        <ProtectedRoute user={user} path={ROUTES.BROWSE}>
          <Browse />
        </ProtectedRoute>
        <IsUserRedirect exact user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
          <Home />
        </IsUserRedirect>
      </Switch>
    </Router>
  );
}

export default App;
