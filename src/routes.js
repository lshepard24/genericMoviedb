import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { 
  SearchContainer, 
  HomeContainer, 
  NowPlayingContainer,
  TopRatedContainer
 } from './containers/index';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={NowPlayingContainer}/>
        <Route path="/top-movies" component={TopRatedContainer}/>
        <Route path="/now-playing" component={NowPlayingContainer}/>
        <Route path="/search" component={SearchContainer}/>
      </Switch>
    );
  }
}

export default Routes;