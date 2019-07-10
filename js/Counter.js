const Counter = props => {
  return React.createElement(
    "span",
    null,
    "Number of Times ",
    props.numberOfTimes
  );
};