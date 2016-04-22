$('.nav').localScroll();

$('body').stellar();

// Counting numbers up

var $number = $('#number');
var numberMax = parseInt($number.attr('data-max'), 10);
var current = 0;
console.log(numberMax);

// Small numbers
var updatenumber = function () {
  current += 1;
  $number.html(current.toLocaleString() + '%');
  updateTick();
};

var updateTick = function () {
  if (current < numberMax) {
    requestAnimationFrame(updatenumber);
  } else {
    $number.html(numberMax.toLocaleString() + '%');
  }
};

updatenumber();

// Big numbers
var updatenumberBig = function () {
  current += 2500;
  $number.html(current.toLocaleString());
  updateTick();
};

var updateTickBig = function () {
  if (current < numberMax) {
    requestAnimationFrame(updateLength);
  } else {
    $number.html(numberMax.toLocaleString());
  }
};

updatenumber();


