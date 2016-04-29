// Counting numbers up

var $percentnumber = $('#percentnumber');
var percentnumberMax = parseInt($percentnumber.attr('data-max'), 10);
var current = 0;
var updateTickpercent = 0;

var $millionnumber = $('#millionnumber');
var millionnumberMax = parseInt($millionnumber.attr('data-max'), 10);
var currentmillion = 0;
var updateTick = 0;

var $numberBig = $('#numberbig');
var numberBigMax = parseInt($numberBig.attr('data-max'), 10);
var currentBig = 0;
var updatenumberBig = 0;

var $numbersixtytwo = $('#numbersixtytwo');
var numbersixtytwoMax = parseInt($numbersixtytwo.attr('data-max'), 10);
var currentnumbersixtytwo = 0;
var updateTickBig = 0;

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
