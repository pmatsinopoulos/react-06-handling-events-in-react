const MyDiv = props => {
  let mouseOver = (event) => {
    console.log('Mouse over')
    console.log('this', this)
    console.dir(event)
    event.persist()
  }

  let mouseOverCapture = (event) => {
    console.log('Mouse over capture')
    console.log('this', this)
    console.dir(event)
    event.persist()
  }

  return (
    <div onMouseOverCapture={mouseOverCapture}
         onMouseOver={mouseOver}
         className="red-border">
      Mouse Over here
    </div>
  )
}