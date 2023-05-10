import React  from 'react';
import PopupWindow from '../../../PopupWindow/PopupWindow';

function Matches(props) {

  return (
    <div className={"type type_matches" + (props.isVisible ? " type_visible" : " ")}>
      <div className='type__main'>

      </div>
    </div>
  )
}

export default Matches;