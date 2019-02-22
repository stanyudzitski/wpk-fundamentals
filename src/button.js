const makeButton = buttonName => {
  const buttonLabel = `Button name is: ${buttonName}`;
  const button = document.createElement('button');

  button.innerText = buttonLabel;

  return button;
};

module.exports = makeButton;
