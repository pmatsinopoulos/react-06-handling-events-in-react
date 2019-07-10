const ClickMeCounterButton = props => {
  return (
    <button onClick={props.clickMeCounterButtonClickHandler}>
      Don't click me {props.numberOfTimes} times!
    </button>
  )
}
