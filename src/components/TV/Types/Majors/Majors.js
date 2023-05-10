import React  from 'react';
import Major from '../../../Major/Major';
import { majorsArray } from '../../../../utils/constants';

function Majors(props) {

  const [isCompetitive, setIsCompetitive] = React.useState(true)
  const [isDual, setIsDual] = React.useState(false)
  const [isUsual, setIsUsual] = React.useState(false)
  const [isDeathmatch, setIsDeathmatch] = React.useState(false)
  const [isMilitary, setIsMilitary] = React.useState(false)

  
  return (
    <div className={"type type_majors" + (props.isVisible ? " type_visible" : " ")}>
      <div className='type__main'>
        <div className='regym__main-wrapper'>
          <div className='regym__main regym__main_majors'>
            <ul className="regym__majors">
                {
                  majorsArray.map((element, index) => 
                    <Major 
                      key={index}
                      object={element}
                    />
                  )
                }  
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Majors;