class SliderValue extends React.Component {
  constructor(props) {
    super(props);
    this.handleSlide = this.handleSlide.bind(this);
  }

  handleSlide(event) {
    console.debug(this, 'event', event);
    $('#slider').slider('value', event.detail.newValue);
  }

  componentDidMount() {
    console.debug(this, 'adding window event listener');
    window.addEventListener('slide', this.handleSlide);
  }

  componentWillUnmount() {
    window.removeEventListener('slide', this.handleSlide);
  }

  render() {
    return React.createElement(
      'div',
      null,
      '\xA0'
    );
  }
}