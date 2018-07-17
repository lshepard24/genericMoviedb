import React, { Component } from 'react';
import { Search } from '../components/index';
import { NowPlayingContainer, SearchContainer } from './index';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState === this.state) return false;
    else return true;
  }

  render() {
    console.log('the props in home container', this.props);

    return(
      <div>
        <Search search={this.props}/>
        <NowPlayingContainer />
      </div>
    );
  }
}

export default HomeContainer;