import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { SearchContainer, HomeContainer } from './containers/index';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomeContainer} />
        <Route path="/movies" component={SearchContainer} />
      </Switch>
    );
  }
}

export default Routes;