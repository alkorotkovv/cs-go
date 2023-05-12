import React  from 'react';
import Major from '../../../Major/Major';
import { majorsArray } from '../../../../utils/constants';

function Majors(props) {

  let refMajors = React.useRef(null);

  //Реализация горизонтальной прокрутки на колесико мышки
  React.useEffect(() => {
    const el = refMajors.current
    if (el) {
      const onWheel = (evt) => {
        evt.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + evt.deltaY * 0.9,
          behavior: "auto"
        })
      }
      el.addEventListener('wheel', onWheel);
      return () => el.removeEventListener('wheel', onWheel);
    }
  }, [])
  
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