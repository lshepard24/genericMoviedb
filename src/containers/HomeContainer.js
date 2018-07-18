import React, { Component } from 'react';
import { Search } from '../components/index';
import { NowPlayingContainer } from './index';

const HomeContainer = (props) => {
  const search = props;
  console.log('props in home', search);

  return (
    <div>
     Home
    </div>
  );
};

export default HomeContainer;