import React  from 'react';

function Play(props) {
  
  return (
    <div className={"play" + (props.isVisible ? " play_visible" : "")}>
      PLAY
    </div>
  )
}

export default Play;