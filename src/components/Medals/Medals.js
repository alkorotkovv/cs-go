import { medalsArray } from '../../utils/constants';
import Medal from '../Medal/Medal';

function Medals(props) {
  
  return (    
    <ul className={"medal-list" + (props.isMedalsSwipingLeft ? " medal-list_left" : "") + (props.isMedalsSwipingRight ? " medal-list_right" : "")}>      
      {
        medalsArray.slice(5 * props.countMedalsBlock , 5 * props.countMedalsBlock + 5).map((element, index) => 
        (
          <Medal key={index} index={index} element={element} />
        )
        )
      }
    </ul>
  )
}

export default Medals;