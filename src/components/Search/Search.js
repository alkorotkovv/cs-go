import React from 'react';

import mmIcon from '../../images/mm_icon.png';
import dualIcon from '../../images/dual_icon.png';
import zoneIcon from '../../images/zone_icon.png';
import updateIcon from '../../images/update_icon.png';
import Friends from '../Friends/Friends';

function Search(props) {

  const [isMmActive, setIsMmActive] = React.useState(true);
  const [isDualActive, setIsDualActive] = React.useState(false);
  const [isZoneActive, setIsZoneActive] = React.useState(false);
  const [isUpdateActive, setIsUpdateActive] = React.useState(false);
  const [isProgressShow, setIsProgressShow] = React.useState(false);

  function handleMmClick() {
    setIsMmActive(true);
    setIsDualActive(false);
    setIsZoneActive(false);
    setIsUpdateActive(false);
  }

  function handleDualClick() {
    setIsMmActive(false);
    setIsDualActive(true);
    setIsZoneActive(false);
    setIsUpdateActive(false);
  }

  function handleZoneClick() {
    setIsMmActive(false);
    setIsDualActive(false);
    setIsZoneActive(true);
    setIsUpdateActive(false);
  }

  function handleUpdateClick() {
  }
  
  return (
    <div className='search'>
      <div className='search__up'>
        <img className={"search__logo" + (isMmActive ? " search__logo_active" : "")} onClick={handleMmClick} src={mmIcon} alt="мм"/>
        <img className={"search__logo" + (isDualActive ? " search__logo_active" : "")} onClick={handleDualClick} src={dualIcon} alt="напарники"/>
        <img className={"search__logo" + (isZoneActive ? " search__logo_active" : "")} onClick={handleZoneClick} src={zoneIcon} alt="запретка"/>
        <img className={"search__logo" + (isUpdateActive ? " search__logo_active" : "")} onClick={handleUpdateClick} src={updateIcon} alt="обновить"/>
      </div>
      <div className={"search__progress" + (isProgressShow ? " search__progress_visible" : "")}>
        <div className='search__progress-bar'></div>
      </div>
      <Friends isVisible={props.isVisible} isRankVisible={props.isRankVisible} friendsArray={props.friendsArray}/>
    </div>
  )
}

export default Search;