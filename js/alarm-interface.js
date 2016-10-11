var Alarm = require('./../js/alarm.js').alarmModule;

$(document).ready(function(){
  $('#time').text(moment().format('LLLL'));
  $('#alarm').submit(function() {
    event.preventDefault();
    var newAlarm = new Alarm();
    var userMinute = $('#userMinute').val();
    var setTime = newAlarm.setAlarm(userMinute);
    // $('#setTime').text(result.get('h') + ":" + result.get('m'));
    $('#setTime').text(setTime.format('LLLL'));
    var duration = newAlarm.countDown(userMinute, setTime);
    setInterval(function() {
      duration = moment.duration(duration - 1000, 'milliseconds');
        $('.output').text(duration.minutes() + ":" + duration.seconds())
        if(duration.minutes() === 0 && duration.seconds() === 0) {
          $('.output').append("<br>" + "Time's Up!!");
          // clearInterval(duration);
          return;
        }
    }, 1000);
  });
});
