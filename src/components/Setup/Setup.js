function Setup(props) {
  return (
    <div className={"setup" + ` ${props.id}`}>
      <img className="setup__image" src={props.image} alt="img"/>
      <span className="setup__span">{props.span}</span>
    </div>
  );
}

export default Setup;
