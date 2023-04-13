function Friend(props) {

  return (
    <li className='friends__item'>
      <img className={"friends__avatar" + (props.status === "Играет в CS:GO" ? " friends__avatar_play" : "")} src={props.avatar} alt="друг"/>
      <p className='friends__name'>{props.name}</p>
      <p className='friends__status'>{props.status}</p>
    </li>
  );

}

export default Friend;