class Content extends React.Component {
  componentDidMount() {
    console.debug(this, 'component did mount');
  }
  render() {
    return (
      <SliderButtons />
    )
  }
}