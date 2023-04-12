import { friendsArray } from '../../utils/constants';
import Friend from '../Friend/Friend';

function Friends(props) {
  
  return (
    <ul className= {"friends" + (props.isRankVisible ? " friends_short" : "")}>
      {
        friendsArray.map((element, index) => 
          <Friend 
            key={index} 
          />
        )
        }  
    </ul>
  )
}

export default Friends;