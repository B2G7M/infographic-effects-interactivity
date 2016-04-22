var $neuro = $('.neuro');
var $neuro = $('.neuro');
var $30 = $('.30');
var $775000 = $('.775000');
var $injury = $('.injury');
var $62 = $('.62');
var $percents = $('.percents');
var $hip = $('.hip');
var $youth = $('.youth');
var $injuries = $('.injuries');
var $finger = $('.finger');
var $50 = $('.50');
var $over = $('.over');
var $knee = $('.knee');
var $baseball = $('.baseball');
var $age = $('.age');
var $prevention = $('.prevention');

$neuro.waypoint(function (direction) {
  if (direction == 'down') {
    $neuro.addClass('opacity');
    updatepercentnumber();
  } else {
    $neuro.removeClass('opacity')
  }
}, { offset: '70%'} );

$30.waypoint(function (direction) {
  if (direction == 'down') {
    $30.addClass('opacity');
    updatemillionnumber();
  } else {
    $30.removeClass('opacity')
  }
}, { offset: '70%'} );

$775000.waypoint(function (direction) {
  if (direction == 'down') {
    $775000.addClass('opacity')
    updatenumberBig();
  } else {
    $775000.removeClass('opacity')
  }
}, { offset: '70%'} );

$injury.waypoint(function (direction) {
  if (direction == 'down') {
    $injury.addClass('opacity')
  } else {
    $injury.removeClass('opacity')
  }
}, { offset: '70%'} );

$62.waypoint(function (direction) {
  if (direction == 'down') {
    $62.addClass('opacity')
  } else {
    $62.removeClass('opacity')
  }
}, { offset: '70%'} );

$percents.waypoint(function (direction) {
  if (direction == 'down') {
    $percents.addClass('opacity')
  } else {
    $percents.removeClass('opacity')
  }
}, { offset: '70%'} );

$hip.waypoint(function (direction) {
  if (direction == 'down') {
    $hip.addClass('opacity')
  } else {
    $hip.removeClass('opacity')
  }
}, { offset: '70%'} );

$youth.waypoint(function (direction) {
  if (direction == 'down') {
    $youth.addClass('opacity')
  } else {
    $youth.removeClass('opacity')
  }
}, { offset: '70%'} );

$injuries.waypoint(function (direction) {
  if (direction == 'down') {
    $injuries.addClass('opacity')
  } else {
    $injuries.removeClass('opacity')
  }
}, { offset: '70%'} );

$finger.waypoint(function (direction) {
  if (direction == 'down') {
    $finger.addClass('opacity')
  } else {
    $finger.removeClass('opacity')
  }
}, { offset: '70%'} );

$50.waypoint(function (direction) {
  if (direction == 'down') {
    $50.addClass('opacity')
  } else {
    $50.removeClass('opacity')
  }
}, { offset: '70%'} );

$over.waypoint(function (direction) {
  if (direction == 'down') {
    $over.addClass('opacity')
  } else {
    $over.removeClass('opacity')
  }
}, { offset: '70%'} );

$knee.waypoint(function (direction) {
  if (direction == 'down') {
    $knee.addClass('opacity')
  } else {
    $knee.removeClass('opacity')
  }
}, { offset: '70%'} );

$baseball.waypoint(function (direction) {
  if (direction == 'down') {
    $baseball.addClass('opacity')
  } else {
    $baseball.removeClass('opacity')
  }
}, { offset: '70%'} );

$age.waypoint(function (direction) {
  if (direction == 'down') {
    $age.addClass('opacity')
  } else {
    $age.removeClass('opacity')
  }
}, { offset: '80%'} );

$prevention.waypoint(function (direction) {
  if (direction == 'down') {
    $prevention.addClass('opacity')
  } else {
    $prevention.removeClass('opacity')
  }
}, { offset: '90%'} );
