import React  from 'react';
import tournaments from '../../../../images/tournaments.png';

function Tournaments(props) {


  return (
    <div className={"type type_tournaments" + (props.isVisible ? " type_visible" : " ")} >
      <div className='type__main'>
        <div className='regym__main-wrapper regym__main-wrapper_transparent'>
          <div className='regym__secondary regym__secondary_workshop'>
            <div className='tournaments'>
              <div className='tournaments__main'>
                <p className='tournaments__title'>СЕЙЧАС</p>
                <img className='tournaments__image' src={tournaments} alt="турниры" draggable="false"/>
              </div>
              <div className='tournaments__bottom'>
                <p className='tournaments__bottom-text'>Информация о турнирах предоставлена порталом HLTV.org</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tournaments;