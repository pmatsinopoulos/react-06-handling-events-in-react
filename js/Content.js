class Content extends React.Component {
  constructor(props) {
    super(props);
    this.handler = this.handler.bind(this);
    this.state = {
      numberOfTimes: 0
    };
  }
  handler(event) {
    this.setState({ numberOfTimes: ++this.state.numberOfTimes });
  }

  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(ClickMeCounterButton, { clickMeCounterButtonClickHandler: this.handler }),
      React.createElement("br", null),
      React.createElement(Counter, { numberOfTimes: this.state.numberOfTimes })
    );
  }
}