import React from 'react';
//import { Route, Switch, useHistory } from 'react-router-dom';
import LeftBar from '../LeftBar/LeftBar.js';
import Menu from '../Menu/Menu.js';
import RightBar from '../RightBar/RightBar.js';

function App() {
  return (
    <div className="page">
      <Menu />
      <LeftBar />
      <RightBar />
    </div>
  );

}

export default App;
