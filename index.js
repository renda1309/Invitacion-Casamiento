var customdate = "16 november 2024 10:00 PM";

function clock() {
  var end = new Date(customdate);
  var now = new Date();
  const diff = (end - now) / 1000;

  var days = Math.floor(diff / 3600 / 24);
  var hours = Math.floor(diff / 3600) % 24;
  var minutes = Math.floor(diff / 60) % 60;
  var seconds = Math.floor(diff) % 60;

  if (diff < 0) return;

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}

clock();

setInterval(() => {
  clock();
}, 1000);
