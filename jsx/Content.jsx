class Content extends React.Component {
  constructor(props) {
    super(props)
    this.handler = this.handler.bind(this)
    this.state = {
      numberOfTimes: 0
    }
  }
  handler(event) {
    this.setState({numberOfTimes: ++this.state.numberOfTimes})
  }

  render() {
    return (
      <div>
        <ClickMeCounterButton clickMeCounterButtonClickHandler={this.handler}/>
        <br/>
        <Counter numberOfTimes={this.state.numberOfTimes} />
      </div>
    )
  }
}