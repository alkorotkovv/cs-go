import React from 'react';

import mmIcon from '../../images/mm_icon.png';
import dualIcon from '../../images/dual_icon.png';
import zoneIcon from '../../images/zone_icon.png';
import updateIcon from '../../images/update_icon.png';

import { searchArray_mm, 
         searchArray_dual,
         searchArray_zone } from '../../utils/constants';

import Players from '../Players/Players';

function Search(props) {
  
  return (
    <div className='search'>
      <div className='search__up'>
        <img className={"search__logo" + (props.isMmActive ? " search__logo_active" : "")} onClick={props.handleMmClick} src={mmIcon} alt="мм" draggable="false"/>
        <img className={"search__logo" + (props.isDualActive ? " search__logo_active" : "")} onClick={props.handleDualClick} src={dualIcon} alt="напарники" draggable="false"/>
        <img className={"search__logo" + (props.isZoneActive ? " search__logo_active" : "")} onClick={props.handleZoneClick} src={zoneIcon} alt="запретка" draggable="false"/>
        <img className={"search__logo" + (props.isUpdateActive ? " search__logo_active" : "")} onClick={props.handleUpdateClick} src={updateIcon} alt="обновить" draggable="false"/>
      </div>
      <div className={"search__progress" + (props.isProgressShow ? " search__progress_visible" : "")}>
        <div className={"search__progress-bar" + (props.isProgressShow ? " search__progress-bar_active" : "")}></div>
      </div>
      <Players isVisible={props.isMmActive} isRankVisible={props.isRankVisible} friendsArray={searchArray_mm} isProgressShow={props.isProgressShow} Reload={props.Reload}/>
      <Players isVisible={props.isDualActive} isRankVisible={props.isRankVisible} friendsArray={searchArray_dual} isProgressShow={props.isProgressShow} Reload={props.Reload}/>
      <Players isVisible={props.isZoneActive} isRankVisible={props.isRankVisible} friendsArray={searchArray_zone} isProgressShow={props.isProgressShow} Reload={props.Reload}/>
    </div>
  )
}

export default Search;