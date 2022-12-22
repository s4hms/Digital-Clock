const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const second = document.querySelector(".second");
const colon = Array.from(document.querySelectorAll(".colon"));

const day = document.querySelector(".day");

const now = new Date();

hour.textContent = `${now.getHours()}`.padStart(2, "0");
minute.textContent = new Intl.DateTimeFormat(navigator.language, {
  minute: "2-digit",
}).format(now);
second.textContent = new Intl.DateTimeFormat(navigator.language, {
  second: "2-digit",
}).format(now);

day.textContent = new Intl.DateTimeFormat(navigator.language, {
  weekday: "long",
  day: "2-digit",
  month: "long",
  year: "numeric",
}).format(now);

setInterval(() => {
  colon.forEach((ele) => {
    ele.classList.toggle("disp");
  });

  second.textContent = new Intl.DateTimeFormat(navigator.language, {
    second: "2-digit",
  }).format(new Date());

  minute.textContent = new Intl.DateTimeFormat(navigator.language, {
    minute: "2-digit",
  }).format(new Date());

  hour.textContent = `${new Date().getHours()}`.padStart(2, "0");

  day.textContent = new Intl.DateTimeFormat(navigator.language, {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date());
}, 1000);
