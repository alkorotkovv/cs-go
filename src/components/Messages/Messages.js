import { messagesArray } from '../../utils/constants';
import addFriendIcon from '../../images/add_friend_icon.png';
import Friends from '../Friends/Friends';

function Messages(props) {
  
  return (
    <div className='messages'>
      <div className='messages__up'>
        <img className='messages__logo' src={addFriendIcon} alt="добавить"/>
      </div>
      <Friends isVisible={props.isVisible} isRankVisible={props.isRankVisible} friendsArray={props.friendsArray}/>
    </div>
  )
}

export default Messages;