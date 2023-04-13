import { medalsArray } from '../../utils/constants';
import Medal from '../Medal/Medal';

function Medals(props) {
  
  return (    
    <ul className='medal-list'>
      
      {
        medalsArray.slice(5 * props.countMedalsBlock , 5 * props.countMedalsBlock + 5).map((element, index) => 
        (
          <Medal index={index} element={element} />
        )
        )
      }
    </ul>
  )
}

export default Medals;