class Content extends React.Component {
  componentDidMount() {
    console.debug(this, 'component did mount');
  }
  render() {
    return React.createElement(
      'div',
      null,
      React.createElement(SliderValue, null),
      React.createElement(SliderButtons, null)
    );
  }
}