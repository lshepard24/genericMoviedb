import React, { Component } from 'react';
import { Search } from '../components/index';
import { NowPlayingContainer, SearchContainer } from './index';

const HomeContainer = (props) => {
  return (
    <div>
      <Search search={props}/>
      <NowPlayingContainer search={props}/>
    </div>
  );
};

export default HomeContainer;