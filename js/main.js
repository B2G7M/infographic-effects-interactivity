$('.nav').localScroll();

$('body').stellar();

// Counting numbers up

var $percentnumber = $('#percentnumber');
var percentnumberMax = parseInt($percentnumber.attr('data-max'), 10);
var current = 0;

var $millionnumber = $('#millionnumber');
var millionnumberMax = parseInt($millionnumber.attr('data-max'), 10);
var currentmillion = 0;

var $numberBig = $('#numberBig');
var numberBigMax = parseInt($numberBig.attr('data-max'), 10);
var currentBig = 0;
// console.log(numberMax);

// % numbers
var updatepercentnumber = function () {
  current += 1;
  $percentnumber.html(current.toLocaleString() + '%');
  updateTickpercent();
};

var updateTickpercent = function () {
  if (current < percentnumberMax) {
    requestAnimationFrame(updatepercentnumber);
  } else {
    $percentnumber.html(percentnumberMax.toLocaleString() + '%');
  }
};

updatepercentnumber();

// 30 Million Medallion
var updatemillionnumber = function () {
  currentmillion += 1;
  $millionnumber.html(currentmillion.toLocaleString());
  updateTick();
};

var updateTick = function () {
  if (currentmillion < millionnumberMax) {
    requestAnimationFrame(updatemillionnumber);
  } else {
    $millionnumber.html(millionnumberMax.toLocaleString());
  }
};

updatemillionnumber();

// 775,000
var updatenumberBig = function () {
  currentBig += 17500;
  $numberBig.html(currentBig.toLocaleString());
  updateTickBig();
};

var updateTickBig = function () {
  if (currentBig < numberBigMax) {
    requestAnimationFrame(updatenumberBig);
  } else {
    $numberBig.html(numberBigMax.toLocaleString());
  }
};

updatenumberBig();


