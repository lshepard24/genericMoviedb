import React, { Component } from 'react';
import { Search } from '../components/index';
import { NowPlayingContainer } from './index';

const HomeContainer = (props) => {
  
  console.log('props in home', props)
  return (
    <div>
      <Search search={props}/>
      <NowPlayingContainer search={props}/>
    </div>
  );
};

export default HomeContainer;