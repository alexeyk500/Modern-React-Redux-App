import React from 'react';
import classes from './App.module.css'

import { Redirect, Route, Switch } from 'react-router-dom';
import Authorisation from "./Authorisation/Authorisation";

function App() {
  return (
    <div className={classes.mainContainer}>
      <Switch>
        <Route exact path="/auth" component={Authorisation} />
        <Route exact path="/" component={Authorisation} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
}

export default App;
