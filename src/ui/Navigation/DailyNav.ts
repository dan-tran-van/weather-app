import { setActiveNav } from '../Navigation';

const DailyNav = document.createElement("div");

DailyNav.classList.add("nav__element");
DailyNav.textContent = "Daily";

DailyNav.addEventListener("click", () => {
  setActiveNav("daily");
})

function renderDailyNav() {}

export { DailyNav };
