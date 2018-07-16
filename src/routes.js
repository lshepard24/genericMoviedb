import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { SearchContainer, HomeContainer, NowPlayingContainer } from './containers/index';
import { NowPlaying } from './components';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomeContainer}/>
      </Switch>
    );
  }
}

export default Routes;