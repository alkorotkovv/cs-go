function Switch(props) {
  return (
    <div className={"switch" + ` ${props.id}`}>
      <input className="switch__checkbox" type="checkbox" id={props.id} />
      <label className="switch__label" htmlFor={props.id}></label>
      <span className="switch__span">{props.span}</span>
    </div>
  );
}

export default Switch;
