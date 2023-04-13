//import medalLogo  from '../../images/friend_avatar.png';

function Medal(props) {

  const path = '../../images/friend_avatar.png'
  var medalLogo = require('../../images/friend_avatar.png');
  //var medalLogo = require(path);
  console.log(path)
  
  return (    
    <li key={props.index} className='medal-list__item'><img className='medal-list__logo' src={medalLogo} alt="медаль"/></li>
  )
}

export default Medal;