var timer;
var time = [];

function printTimer(fn, state) { 

  time = [time[0] || 0, time[1] || 0, time[2] || 0];

  render = function() {
    if (time[2] == 60) {time[2] = 0, time[1]++};
    if (time[1] == 60) {time[1] = 0, time[0]++};
    return `${(time[0] < 10) ? '0' + time[0] : time[0]}:${(time[1] < 10) ? '0' + time[1] : time[1]}:${(time[2] < 10) ? '0' + time[2]++ : time[2]++}`;
  };

  if (state.firstRun) {
    time = [0, 0, 0];
    fn();
  } else if (state.running) {
    timer = setInterval(fn, 1000);
  } else if (state.running === false) {
    clearInterval(timer);
  } else {};
};
