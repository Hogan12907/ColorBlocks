console.log('sourced good!');

$(onReady);

var makeBlack = function() {
  $(this).css('background-color', 'black');
  console.log("Made black");
};

var addBox = function() {
  var $block = ('<div>');
  $('main').append($block).addClass('blocks');
  console.log('button created div');
};

function onReady() {
  $('main').on("click", 'div', makeBlack);
  $('button').on("click", addBox);
}
