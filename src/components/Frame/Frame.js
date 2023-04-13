
const Frame = ({ component: Component, ...props }) => {
  return (
    <div className={"frame" + (props.isVisible ? " frame_visible" : " frame_unvisible") + (props.isRankVisible ? " frame_short" : " frame_big")}>
      <Component {...props} />
    </div>
  )
}

export default Frame;