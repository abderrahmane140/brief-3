let days = document.getElementById("days");
  let hours = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");

  let days_value = 13;
  let hours_value = 12;
  let minutes_value = 1;
  let seconds_value = 10;

  let countDown = setInterval(function(){
    seconds_value--;
    if (seconds_value == 0) {
      minutes_value--;
      seconds_value = 59;
    }
    if (minutes_value == 0) {
      hours_value--;
      minutes_value = 59;
    }
    if(hours_value == 0) {
      days_value--;
      hours_value = 24; 
    }

    days.textContent = days_value < 10 ? "0" +days_value : days_value;
    minutes.textContent = minutes_value < 10 ? "0" + minutes_value  : minutes_value;
    seconds.textContent = seconds_value < 10 ? "0" + seconds_value : seconds_value;
    hours.textContent = hours_value < 10 ? "0" + hours_value : hours_value;

},1000)