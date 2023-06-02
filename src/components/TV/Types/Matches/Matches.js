import React  from 'react';
import { matchesArray } from '../../../../utils/constants';
import Match from '../../../Match/Match';

function Matches(props) {

  const [matches, setMatches] = React.useState(matchesArray);

  function handleMatchClick(id) {
    setMatches(
      matches.map((item, index) =>
        index === id ? { ...item, checked: true } : { ...item, checked: false }
      )
    );
  };

  

  return (
    <div className={"type type_matches" + (props.isVisible ? " type_visible" : " ")}>
      <div className='type__main'>
        <div className='regym__main-wrapper'>
          <div className="regym__secondary regym__secondary_matches">
            <div className='matches'>
              <ul className="regym__matches">
                {
                  matches.map((element, index) => 
                    <Match 
                      key={index}
                      index={index}
                      object={element}
                      handleMatchClick={handleMatchClick}
                    />
                  )
                }  
              </ul>
            </div>
            <div className='legend'>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Matches;