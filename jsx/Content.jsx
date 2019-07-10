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
      <ClickMeCounterButton numberOfTimes={this.state.numberOfTimes} clickMeCounterButtonClickHandler={this.handler}/>
    )
  }
}