/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

$(document).ready(function() {
  $('#particles').particleground({
    dotColor: '#000',
    lineColor: '#000'
  });
  $('.intro').css({
    'margin-top': -($('.intro').height() / 2)
  });
});