import React  from 'react';
import { matchesArray } from '../../../../utils/constants';
import Match from '../../../Match/Match';

function Matches(props) {

  return (
    <div className={"type type_matches" + (props.isVisible ? " type_visible" : " ")}>
      <div className='type__main'>
        <div className={"regym regym_matches" + (props.isVisible ? " regym_visible" : " ")}>
          <div className='matches'>
            <ul className="regym__matches">
              {
                matchesArray.map((element, index) => 
                  <Match 
                    key={index}
                    object={element}
                    logo={element.logo}
                    icon={element.icon}
                    name={element.name}
                    time={element.time}
                    isCompetitive={element.isCompetitive}
                    isCheckable={false}
                    isTimeVisible={false}
                    isIconVisible={true}
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
  )
}

export default Matches;