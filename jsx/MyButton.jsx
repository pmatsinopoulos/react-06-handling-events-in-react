const MyButton = props => {
  let clickMe = (event) => {
    console.debug('click me event', event)
  }
  return (
    <button onClick={clickMe}>
      Click Me
    </button>
  )
}
