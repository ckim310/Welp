import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import GreetingContainer from './navbar/greeting_container';

export default () => {
  return (
    <HashRouter>
      <div className="app-main">
        <h1>Welp</h1>
        <GreetingContainer />
      </div>
    </HashRouter>
  )
}