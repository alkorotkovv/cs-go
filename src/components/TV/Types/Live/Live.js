import React  from 'react';
import MatchOnline from '../../../MatchOnline/MatchOnline';
import gotvIcon from '../../../../images/gotv_icon.png';

function Live(props) {

  const [id, setId] = React.useState(props.matches[0].id);

  //Обработчик клика по матчу
  function handleMatchClick(id) {
    setId(id);
  };


  return (
    <div className={"type type_matches" + (props.isVisible ? " type_visible" : " ")}>
      <div className='type__main'>
        <div className='regym__main-wrapper'>
          <div className="regym__secondary regym__secondary_matches">
            <div className='matches'>
              <ul className="regym__matches">
                {
                  props.matches.map((element, index) => 
                    <MatchOnline
                      key={index}
                      index={index}
                      id={id}
                      object={element}                      
                      handleMatchClick={handleMatchClick}
                    />
                  )
                }
                <div className='cinema'>
                  <img className='cinema__icon' src={gotvIcon} alt="cinema" draggable="false"/>
                  <p className='cinema__text'>Кинотеатр GOTV</p>
                </div>
              </ul>
            </div>
            <div className='legend'>
              <div className='legend__main'>
                <img className='legend__match-picture' src={props.matches.find((item) => item.id === id).image} alt="match" draggable="false"/>
              </div>
              <div className='legend__bottom'>
                <button className='legend__button'>Смотреть в прямом эфире</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Live;