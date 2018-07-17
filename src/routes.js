import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { SearchContainer, HomeContainer, NowPlayingContainer } from './containers/index';
import { NowPlaying, Movie } from './components';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomeContainer}/>
        <Route exact path="/movie" component={Movie} />
      </Switch>
    );
  }
}

export default Routes;