console.log('sourced good!');

$(onReady);

function randomNumber(min, max) {
  return Math.floor(Math.random() * (1 + max - min) + min);
}

function rgbValue() {
  var r = randomNumber(0, 255);
  var g = randomNumber(0, 255);
  var b = randomNumber(0, 255);
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';

}

var makeBlack = function() {
  $(this).css('background-color', 'black');
  //console.log("Made black");
};

var clickX = function () {
  $(this).parent().remove();
  console.log("clicked x");
};

var addBox = function() {
  var $block = ('<div style="background-color:' + rgbValue() + '"><p>x</p></div>');
  $('main').append($block);
  // console.log('button created div');
};

function onReady() {
  $('main').on("click", 'div', makeBlack);
  $('button').on("click", addBox);
  $('main').on('click', 'p', clickX);
}
