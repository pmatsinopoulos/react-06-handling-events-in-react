const ClickMeCounterButton = props => {
  console.log(props);
  const buttonStyle = {
    width: props.width.toString() + "px",
    height: props.height.toString() + "px"
  };
  return React.createElement(
    "button",
    { onClick: props.clickMeCounterButtonClickHandler, style: buttonStyle },
    "Don't click me!"
  );
};