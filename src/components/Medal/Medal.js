function Medal(props) {
  
  return (    
    <li key={props.index} className='medal-list__item'><img className='medal-list__logo' src={props.element.logo} alt="медаль"/></li>
  )
}

export default Medal;