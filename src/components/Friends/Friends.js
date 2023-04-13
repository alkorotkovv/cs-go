import { friendsArray } from '../../utils/constants';
import Friend from '../Friend/Friend';

function Friends(props) {
  
  return (
    <ul className= {"friends" + (props.isRankVisible ? " friends_short" : "")}>
      {
        friendsArray.map((element, index) => 
          <Friend 
            key={index}
            avatar={element.avatar}
            name={element.name}
            status={element.status}
          />
        )
        }  
    </ul>
  )
}

export default Friends;