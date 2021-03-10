let interval;
let birthday;

// This is used so I can return fake dates for testing purposes :)
function getDate() {
  /* const d = new Date();
  return new Date(
    2021,
    07,
    22,
    d.getHours(),
    d.getMinutes() + 36,
    d.getSeconds(),
    15,
    d.getMilliseconds()
  ); */

  return new Date();
}

const now = getDate();
const afterBirthday =
  now.getMonth() > 7 || (now.getMonth() === 7 && now.getDate() > 22);

const futureAge = afterBirthday
  ? now.getFullYear() - 2001
  : now.getFullYear() - 2002;

function celebrate() {
  document.getElementById(
    "birthday"
  ).innerHTML = `IT'S MY BIRTHDAY TODAY! I'M ${futureAge} NOW :DDDD`;
  fetch("https://cdn.jsdelivr.net/gh/mathusummut/confetti.js/confetti.min.js")
    .then((res) => res.text())
    .then((text) => {
      eval(text);
      confetti.start();
    });
}

function updateTimer(date) {
  document.getElementById(
    "birthday"
  ).innerHTML = `I turn ${futureAge} in ${formatTime(date)}`;
}

function pluralise(i, name) {
  return i === 1 ? `${i} ${name}` : `${i} ${name}s`;
}

function formatTime(date) {
  const duration = birthday - date.getTime();

  let seconds = parseInt((duration / 1000) % 60),
    minutes = parseInt((duration / (1000 * 60)) % 60),
    hours = parseInt((duration / (1000 * 60 * 60)) % 24),
    days = parseInt(duration / (1000 * 60 * 60 * 24));

  return `${pluralise(days, "day")}, ${pluralise(hours, "hour")}, ${pluralise(
    minutes,
    "minute"
  )} and ${pluralise(seconds, "second")}`;
}

if (now.getMonth() > 7 || (now.getMonth() === 7 && now.getDate() > 22)) {
  birthday = new Date(now.getFullYear() + 1, 7, 22).getTime();
} else {
  birthday = new Date(now.getFullYear(), 7, 22).getTime();
}

function tick() {
  const date = getDate();
  if (date.getMonth() === 7 && date.getDate() === 22) {
    clearInterval(interval);
    celebrate();
  } else {
    updateTimer(date);
  }
}

document.onload = () => {
  tick(getDate());
  interval = setInterval(tick, 1000);
};
