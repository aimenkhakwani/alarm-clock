var Alarm = require('./../js/alarm.js').alarmModule;

$(document).ready(function(){
  $('#time').text(moment().format('LLLL'));
  $('#alarm').submit(function() {
    event.preventDefault();
    $('.alarm').show();
    $('.output').show();
    var newAlarm = new Alarm();
    var userMinute = $('#userMinute').val();
    var setTime = newAlarm.setAlarm(userMinute);
    $('#setTime').text(setTime.format('LLLL'));
    var duration = newAlarm.countDown(userMinute, setTime);
    var interval = setInterval(function() {
      duration = moment.duration(duration - 1000, 'milliseconds');
        $('.output').text(duration.minutes() + ":" + duration.seconds())
        if(duration.minutes() === 0 && duration.seconds() === 0) {
          $('.output').empty();
          $('.output').append("<span class='red'>" + "Times Up!!" + "</span>");
          clearInterval(interval);
        }
    }, 1000);
  });
});
