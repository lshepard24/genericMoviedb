import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { SearchContainer, HomeContainer, NowPlayingContainer } from './containers/index';
import { NowPlaying, Movie, SearchResults } from './components';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={HomeContainer}/>
        <Route path="/movies" component={SearchContainer}/>
        <Route path="/movies" component={SearchResults}/>
      </Switch>
    );
  }
}

export default Routes;