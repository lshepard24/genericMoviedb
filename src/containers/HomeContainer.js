import React, { Component } from 'react';
import { Search } from '../components/index';
import { NowPlayingContainer } from './index';

class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
  }

  componentDidMount() {
    console.log('this is when the component mounts in homecontainer');
  }

  render() {
    return(
      <div>
        <Search movie={this.state.input} />
        <NowPlayingContainer />
      </div>
    );
  }
}

export default HomeContainer;