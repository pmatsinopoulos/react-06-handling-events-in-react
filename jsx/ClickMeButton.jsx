class ClickMeButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      numberOfTimes: 0
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(event) {
    console.debug('clicked')
    this.setState({numberOfTimes: ++this.state.numberOfTimes})
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Don't click me {this.state.numberOfTimes} times!
      </button>
    )
  }
}