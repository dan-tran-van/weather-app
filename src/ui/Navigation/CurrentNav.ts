import { setActiveNav } from '../Navigation';

const CurrentNav = document.createElement("div");

CurrentNav.textContent = "Current";
CurrentNav.classList.add("nav__element");


CurrentNav.addEventListener("click", (e) => {
  setActiveNav("current");
});

function renderCurrentNav() {}

export { CurrentNav };
