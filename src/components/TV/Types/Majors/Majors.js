import React  from 'react';
import Major from '../../../Major/Major';
import { majorsArray } from '../../../../utils/constants';

function Majors(props) {

  let refMajors = React.useRef();

  //Реализация горизонтальной прокрутки на колесико мышки
  React.useEffect(() => {
    if (refMajors.current) {
      const onWheel = (evt) => {
        evt.preventDefault();
        refMajors.current.scrollTo({
          left: refMajors.current.scrollLeft + evt.deltaY * 0.9,
          behavior: "auto"
        })
      }
      refMajors.current.addEventListener('wheel', onWheel);
      return () => refMajors.current.removeEventListener('wheel', onWheel);
    }
  }, [])

  const [isCompetitive, setIsCompetitive] = React.useState(true)
  const [isDual, setIsDual] = React.useState(false)
  const [isUsual, setIsUsual] = React.useState(false)
  const [isDeathmatch, setIsDeathmatch] = React.useState(false)
  const [isMilitary, setIsMilitary] = React.useState(false)

  
  return (
    <div className={"type type_majors" + (props.isVisible ? " type_visible" : " ")}>
      <div className='type__main'>
        <div className='regym__main-wrapper'>
          <div className='regym__main regym__main_majors' ref={refMajors}>
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