const ClickMeCounterButton = props => {
  return React.createElement(
    "button",
    { onClick: props.clickMeCounterButtonClickHandler },
    "Don't click me!"
  );
};