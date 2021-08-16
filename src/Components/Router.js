import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
//
import Navigation from './Navigation';
import Home from '../Routers/Home';

class Router extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default Router;
