import React, { Component } from 'react';
import axios from 'axios';
import history from '../history';

import { Movie } from '../components/index';
import { SearchContainer, NowPlayingContainer } from './index';

class HomeContainer extends Component {
  constructor() {
    super();
    this.state = {
      input: ''
    };
  }

  render() {
    console.log('state in home container', this.state)
    return(
      <div>
        <SearchContainer movie={this.state.input} />
        <NowPlayingContainer />
      </div>
    );
  }
}

export default HomeContainer;