class Content extends React.Component {
  constructor(props) {
    super(props)
    this.handler = this.handler.bind(this)
    this.getButtonNewWidth = this.getButtonNewWidth.bind(this)
    this.getButtonNewHeight = this.getButtonNewHeight.bind(this)
    this.handleResize = this.handleResize.bind(this)
    this.state = {
      numberOfTimes: 0,
      buttonNewWidth: this.currentWindowWidth(),
      buttonNewHeight: this.currentWindowHeight()
    }
  }

  currentWindowWidth() {
    return Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
  }

  currentWindowHeight() {
    return Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
  }

  handler(event) {
    this.setState({numberOfTimes: ++this.state.numberOfTimes})
  }

  getButtonNewWidth() {
    return this.state.buttonNewWidth / 2
  }

  getButtonNewHeight() {
    return this.state.buttonNewHeight / 2
  }

  handleResize(event) {
    console.log('resize called')
    this.setState({buttonNewWidth: this.currentWindowWidth(), buttonNewHeight: this.currentWindowHeight()})
  }

  componentDidMount() {
    console.debug('did mount')
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    console.debug('unmounting')
    window.removeEventListener('resize', this.handleResize)
  }

  render() {
    return (
      <div>
        <ClickMeCounterButton clickMeCounterButtonClickHandler={this.handler}
                              width={this.getButtonNewWidth()}
                              height={this.getButtonNewHeight()}/>
        <br/>
        <Counter numberOfTimes={this.state.numberOfTimes} />
      </div>
    )
  }
}