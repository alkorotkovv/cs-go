import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import LeftBar from '../LeftBar/LeftBar.js';
import Menu from '../Menu/Menu.js';

function App() {
  return (
    <div className="page">
      <Menu />
      <LeftBar />
    </div>
  );

}

export default App;
