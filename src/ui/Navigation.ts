import { SearchBar } from "./Navigation/SearchBar";
import { CurrentNav } from "./Navigation/CurrentNav";
import { DailyNav } from "./Navigation/DailyNav";
import { HourlyNav } from "./Navigation/HourlyNav";
import { activeTab, setActiveTab } from "../main";
import { setActiveContent } from './Content.ts';

const Nav = document.createElement("nav");
Nav.appendChild(SearchBar);
Nav.appendChild(CurrentNav);
Nav.appendChild(HourlyNav);
Nav.appendChild(DailyNav);


function setActiveNav(newActiveNav: "current" | "hourly" | "daily") {
  const navElements = document.querySelectorAll(".nav__element");
  navElements!.forEach((el) => {
    if (el.textContent!.toLowerCase() != newActiveNav) {
      el.classList.remove("nav__element--active");
    } else {
      el.classList.add("nav__element--active");
    }
  });
  setActiveTab(newActiveNav);
  // setActiveContent(newActiveNav);
}

export { Nav, setActiveNav };
