function Friend(props) {

  return (
    <li className='friend'>
      <img className={"friend__avatar" + (props.status === "Играет в CS:GO" ? " friend__avatar_play" : "")} src={props.avatar} alt="друг"/>
      <p className='friend__name'>{props.name}</p>
      <p className='friend__status'>{props.status}</p>
    </li>
  );

}

export default Friend;