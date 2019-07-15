class SliderButtons extends React.Component {
  constructor(props) {
    super(props);

    this.state = { sliderValue: 0 };
    this.handleSlideEvent = this.handleSlideEvent.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // This will be called by the jQuery UI control/Slider
  handleSlideEvent(event) {
    console.debug(this, 'handleSlide event');
    this.setState({ sliderValue: event.detail.newValue });
  }

  // This is the method to update Slider when a button is clicked
  handleChange(value) {
    return () => {
      let newValue = this.state.sliderValue + value;
      console.debug(this, 'dispatching slide event');
      window.dispatchEvent(new CustomEvent('slide', { detail: { newValue: newValue } }));
    };
  }

  componentDidMount() {
    console.debug(this, 'component did mount');
    window.addEventListener('slide', this.handleSlideEvent);
  }

  componentWillUnmount() {
    window.removeEventListener('slide', this.handleSlideEvent);
  }

  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'button',
        { onClick: this.handleChange(-1), disabled: this.state.sliderValue <= 0 },
        '1 less (',
        this.state.sliderValue - 1,
        ')'
      ),
      React.createElement(
        'button',
        { onClick: this.handleChange(1), disabled: this.state.sliderValue >= 100 },
        '1 higher (',
        this.state.sliderValue + 1,
        ')'
      )
    );
  }
}