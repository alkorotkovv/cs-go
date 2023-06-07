import React  from 'react';
import Popup from '../Popup/Popup';
import TooltipContext from '../../context/TooltipContext';
import gunIcon from '../../images/about_gun_icon.png';
import modelIcon from '../../images/about_model_icon.png';
import infoIcon from '../../images/about_info_icon.png';
import pointsIcon from '../../images/about_points_icon.png';

function InspectionPopup(props) {

  //console.log(props.weapon)

  const showTooltip = React.useContext(TooltipContext);

  const title = props.weapon.weapon + (props.weapon.name === "" ? "" : " | " + props.weapon.name);
  const tooltip = `  Стиль отделки: Оружейная отделка

  Номер в каталоге: 1015

  Шаблон раскраски: 15
  
  Степень износа: ${props.weapon.float}`;
  
  
  return (
    <Popup name="inspection-popup" isVisible={props.isVisible} handleClose={props.handleClose}>
      <div className='inspection-popup__background'>
        <div className='inspection-popup__background-circle'></div>
        <div className='inspection-popup__background-semicircle'></div>
      </div>
      <div className='inspection-popup__header'>
        <img className={'inspection-popup__icon' + (props.weapon.collection.image ? " inspection-popup__icon_visible" : "")} src={props.weapon.collection.image} alt="collection" draggable="false"/>
        <h1 className='inspection-popup__title'>{title}</h1>
        <p className='inspection-popup__header-subtitle'>{props.weapon.collection.name || ""}</p>
        <div className={'inspection-popup__underline' + 
          ((props.weapon.rarity === "Covert") ? " inspection-popup__underline_covert" : "") +
          ((props.weapon.rarity === "Classified") ? " inspection-popup__underline_classified" : "") +
          ((props.weapon.rarity === "Restricted") ? " inspection-popup__underline_retricted" : "") +
          ((props.weapon.rarity === "Mil-Spec") ? " inspection-popup__underline_milspec" : "") +
          ((props.weapon.rarity === "Industrial") ? " inspection-popup__underline_industrial" : "") +
          ((props.weapon.rarity === "Consumer") ? " inspection-popup__underline_consumer" : "")}>
        </div>
      </div>
      <div className={'inspection-popup__main' + 
      (props.weapon.type === "Gloves" ? " inspection-popup__main_type_moto" : "")}>
        <img className='inspection-popup__image' src={props.weapon.image_inspect} alt="weapon" draggable="false"/>
        <p className='inspection-popup__description'>{props.weapon.description}</p>
      </div>
      <div className='inspection-popup__bottom'>
        <ul className='inspection-popup__about'>
          <li className={"inspection-popup__item" + 
          (props.weapon.type==="Medal" || 
           props.weapon.type==="Gloves" ? " inspection-popup__item_unvisible" : "")} 
            //onClick={props.handleFriendsClick}
            onMouseEnter={() => showTooltip({visible: true, text:"Осмотреть оружие", x:"372", y:"943"})} 
            onMouseLeave={() => showTooltip(false, {})}
          >
            <img className='tools__logo' src={gunIcon} alt="оружие" draggable="false"/>
          </li>
          <li className={"inspection-popup__item" + 
          (props.weapon.type==="Medal" || 
           props.weapon.type==="Gloves" ? " inspection-popup__item_unvisible" : "")} 
            //onClick={props.handleFriendsClick}
            onMouseEnter={() => showTooltip({visible: true, text:"Осмотреть с моделью игрока", x:"378", y:"943"})} 
            onMouseLeave={() => showTooltip(false, {})}
          >
            <img className='tools__logo' src={modelIcon} alt="моделька" draggable="false"/>
          </li>
          <li className={"inspection-popup__item" + 
          (props.weapon.type==="Medal" ? " inspection-popup__item_unvisible" : "")} 
            //onClick={props.handleFriendsClick}
            onMouseEnter={() => showTooltip({visible: true, text: tooltip, x:"414", y:"843"})} 
            onMouseLeave={() => showTooltip(false, {})}
          >
            <img className='tools__logo' src={infoIcon} alt="инфо" draggable="false"/>
          </li>
          <li className={"inspection-popup__item" + 
          (props.weapon.isCT || 
           props.weapon.isT || 
           props.weapon.type==="Medal" || 
           props.weapon.type==="Gloves" ? " inspection-popup__item_unvisible" : "")} 
            //onClick={props.handleFriendsClick}
            //onMouseEnter={() => showTooltip({visible: true, text: tooltip, x:"414", y:"843"})} 
            //onMouseLeave={() => showTooltip(false, {})}
          >
            <img className='tools__logo' src={pointsIcon} alt="точки" draggable="false"/>
          </li>
        </ul>
        <button className='inspection-popup__button' onClick={props.handleClose}>Закрыть</button>
      </div>
    </Popup>
  )
}

export default InspectionPopup;