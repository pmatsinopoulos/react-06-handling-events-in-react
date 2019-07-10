var _this = this;

const MyDiv = props => {
  let mouseOver = event => {
    console.log('Mouse over');
    console.log('this', _this);
    console.dir(event);
    event.persist();
  };

  let mouseOverCapture = event => {
    console.log('Mouse over capture');
    console.log('this', _this);
    console.dir(event);
    event.persist();
  };

  return React.createElement(
    'div',
    { onMouseOverCapture: mouseOverCapture,
      onMouseOver: mouseOver,
      className: 'red-border' },
    'Mouse Over here'
  );
};