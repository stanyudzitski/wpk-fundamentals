const makeImage = url => {
  const image = document.createElement('img');
  image.src = url;
  image.height = '200';

  return image;
};

module.exports.makeImage = makeImage;
