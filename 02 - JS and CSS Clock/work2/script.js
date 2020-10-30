const handSecond = document.querySelector(".clock__hand-second");
const handMinute = document.querySelector(".clock__hand-minute");
const handHour = document.querySelector(".clock__hand-hour");

function setRotation(e, rotationRatio) {
  e.style.setProperty("--rotation", rotationRatio * 360);
}

function setClock(e) {
  const getDate = new Date();
  const seconds = getDate.getSeconds() / 60;
  const minutes = (seconds + getDate.getMinutes()) / 60;
  const hours = (minutes + getDate.getHours()) / 12;

  // console.log(`S ${seconds}      M ${minutes}      Hours ${hours}`);

  // handSecond.style.setProperty(
  //   "transform",
  //   `translateX(-50%) rotate(${seconds}deg)`
  // );
  // handMinute.style.setProperty(
  //   "transform",
  //   `translateX(-50%) rotate(${minutes}deg)`
  // );
  // handHour.style.setProperty(
  //   "transform",
  //   `translateX(-50%) rotate(${hours}deg)`
  // );

  setRotation(handSecond, seconds);
  setRotation(handMinute, minutes);
  setRotation(handHour, hours);
}

setInterval(setClock, 1000);
setClock();
