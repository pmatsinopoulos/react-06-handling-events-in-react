const MyButton = props => {
  let clickMe = event => {
    console.debug('click me event', event);
  };
  return React.createElement(
    'button',
    { onClick: clickMe },
    'Click Me'
  );
};