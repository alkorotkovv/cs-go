import React from 'react';
//import { Route, Switch, useHistory } from 'react-router-dom';
import Menu from '../Menu/Menu.js';
import LeftBar from '../LeftBar/LeftBar.js';
import RightBar from '../RightBar/RightBar.js';
import Play from '../Play/Play';

function App() {

  const [isMainVisible, setIsMainVisible] = React.useState(false);
  const [isPlayVisible, setIsPlayVisible] = React.useState(false);

  function handleMainClick() {
    setIsMainVisible(true);
    setIsPlayVisible(false);
  }

  function handlePlayClick() {
    setIsMainVisible(false);
    setIsPlayVisible(true);
  }

  return (
    <div className="page">
      <Menu 
        isMainVisible={isMainVisible} 
        isPlayVisible={isPlayVisible}
      
      
      />  
      <LeftBar 
        isMainVisible={isMainVisible}
        isPlayVisible={isPlayVisible}
        handleMainClick={handleMainClick} 
        handlePlayClick={handlePlayClick} />
      <RightBar />
      <Play isVisible={isPlayVisible} />
    </div>
  );

}

export default App;
