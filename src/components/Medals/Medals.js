import { medalsArray } from '../../utils/constants';

function Medals(props) {
  
  return (    
    <ul className='medal-list'>
      {
        medalsArray.slice(5*props.countMedalsBlock , 5 * props.countMedalsBlock + 5).map((element, index) => 
          <li key={index} className='medal-list__item'><img className='medal-list__logo' src={element.logo} alt="медаль"/></li>
        )
      }
    </ul>
  )
}

export default Medals;