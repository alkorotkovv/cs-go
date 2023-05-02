import React  from 'react';
import PopupWindow from '../../../PopupWindow/PopupWindow';

function Instruction(props) {

  return (
    <PopupWindow isVisible={props.isVisible} title="Training" text="Готовы начать тренировку?" handleClose={props.handleClose} />
  )
}

export default Instruction;