import React from 'react';

function Tooltip(props) {
  console.log(props)

  const tooltipRef = React.useRef(null);

  React.useEffect(() => {
    tooltipRef.current.style.cssText = `--X: ${props.tooltip.x}px; --Y: ${props.tooltip.y}px`;
  })

  //tooltipRef.current.style.cssText = `--X: ${props.tooltip.x}px; --Y: ${props.tooltip.y}px`;
  
  return (
    <div className='tooltip' ref={tooltipRef}>
      <p className='tooltip__text'>{props.tooltip.text}</p>
    </div>
  );

}

export default Tooltip;
