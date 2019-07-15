class SliderButtons extends React.Component {
  constructor(props) {
    super(props);

    this.state = { sliderValue: 0 };
    this.handleSlide = this.handleSlide.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // This will be called by the jQuery UI control/Slider
  handleSlide(event, ui) {
    console.debug(this, 'handleSlide');
    this.setState({ sliderValue: ui.value });
  }

  // This is the method to update Slider when a button is clicked
  handleChange(value) {
    console.debug(this, 'handleChange');
    return () => {
      $('#slider').slider('value', this.state.sliderValue + value);
      this.setState({ sliderValue: this.state.sliderValue + value });
    };
  }

  componentDidMount() {
    console.debug(this, 'component did mount');
    $('#slider').slider({
      change: this.handleSlide
    });

    $('#slider').on('slide', this.handleSlide);
  }

  componentWillUnmount() {
    $('#slider').off('slide', this.handleSlide);
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