import Friend from '../Friend/Friend';

function Friends(props) {

  return (
    <ul className="friends">
      {
        props.friendsArray.map((element, index) => 
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