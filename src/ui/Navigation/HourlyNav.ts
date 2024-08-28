import { setActiveNav } from '../Navigation';

const HourlyNav = document.createElement("div");

HourlyNav.textContent = "Hourly";
HourlyNav.classList.add("nav__element");

HourlyNav.addEventListener("click", () => {
  setActiveNav("hourly");
})

function renderHourlyNav() {

}

export { HourlyNav }