import React, { Component } from 'react';
import axios from 'axios';
import history from '../history';

import { Movie } from '../components/index';
import { SearchContainer, NowPlayingContainer } from './index';

class HomeContainer extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: ''
    };
  }

  render() {

    return(
      <div>
        <SearchContainer movie={this.props} />
        <Movie movie={this.props}/>
        <NowPlayingContainer />
      </div>
    );
  }
}

export default HomeContainer;