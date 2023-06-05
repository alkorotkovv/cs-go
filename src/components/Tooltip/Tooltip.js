import React from 'react';

function Tooltip(props) {

  const tooltipRef = React.useRef(null);

  React.useEffect(() => {
    tooltipRef.current.style.cssText = `--X: ${props.tooltip.x || -100}px; --Y: ${props.tooltip.y || -100}px`;
  })
  
  return (
    <div className={'tooltip' + (props.tooltip.visible ? " tooltip_visible" : "")} ref={tooltipRef}>
      <p className='tooltip__text'>{props.tooltip.text}</p>
    </div>
  );

}

export default Tooltip;
