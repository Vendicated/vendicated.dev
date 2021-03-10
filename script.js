let interval;
let birthday;

// This is used so I can return fake dates for testing purposes :)
function getDate() {
  return new Date();
}

function pluralise(i, name) {
  return i === 1 ? `${i} ${name}` : `${i} ${name}s`;
}

function formatTime(d) {
  const duration = birthday - d.getTime();

  let seconds = parseInt((duration / 1000) % 60),
    minutes = parseInt((duration / (1000 * 60)) % 60),
    hours = parseInt((duration / (1000 * 60 * 60)) % 24),
    days = parseInt(duration / (1000 * 60 * 60 * 24));

  return `${pluralise(days, "day")}, ${pluralise(hours, "hour")}, ${pluralise(
    minutes,
    "minute"
  )} and ${pluralise(seconds, "second")}`;
}

function celebrate() {
  document.getElementById(
    "birthday"
  ).innerHTML = `IT'S MY BIRTHDAY TODAY! I'M ${futureAge} NOW :DDDD`;
  confetti.start();
}

function updateTimer(d) {
  document.getElementById(
    "birthday"
  ).innerHTML = `I turn ${futureAge} in ${formatTime(d)}`;
}

function tick() {
  const d = getDate();
  if (d.getMonth() === 7 && d.getDate() === 22) {
    clearInterval(interval);
    celebrate();
  } else {
    updateTimer(d);
  }
}

const now = getDate();
const afterBirthday =
  now.getMonth() > 7 || (now.getMonth() === 7 && now.getDate() > 22);

const futureAge = afterBirthday
  ? now.getFullYear() - 2001
  : now.getFullYear() - 2002;

if (now.getMonth() > 7 || (now.getMonth() === 7 && now.getDate() > 22)) {
  birthday = new Date(now.getFullYear() + 1, 7, 22).getTime();
} else {
  birthday = new Date(now.getFullYear(), 7, 22).getTime();
}

window.onload = () => {
  tick(getDate());
  interval = setInterval(tick, 1000);
};
