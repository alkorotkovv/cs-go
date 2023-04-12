import friendAvatar from '../../images/friend_avatar.png';

function Friend () {

  return (
    <li className='friends__item'>
      <img className='friends__avatar' src={friendAvatar} alt="друг"/>
      <p className='friends__name'>дядя Федор</p>
      <p className='friends__status'>Играет в CS:GO</p>
    </li>
  );

}

export default Friend;