function Alarm() {
}

Alarm.prototype.setAlarm = function(userMinute) {
  var add = moment().add(userMinute, 'm');
  return add;
};

Alarm.prototype.countDown = function(userMinute, setTime) {
  var currentTime = moment().valueOf();
  var alarmTime = setTime;
  var difference = (alarmTime - currentTime);
  var duration = moment.duration(difference, 'milliseconds');
  console.log("Current time" + ":" + currentTime);
  console.log("Alarm time" + ":" +  alarmTime);
  console.log("difference" + ":" +  difference);
  return duration;
};

exports.alarmModule = Alarm;
