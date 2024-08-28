import "./style.css";
import { fetchWeatherData } from "./data/weatherData.ts";
import { Nav, setActiveNav } from "./ui/Navigation.ts";
import { Content } from './ui/Content.ts';
import { renderCurrentData } from './ui/Content/Current/Current.ts';
import { renderDailyForecast } from './ui/Content/Daily/Daily.ts';
import { renderHourlyForecast } from './ui/Content/Hourly/Hourly.ts';


const app = document.querySelector("#app");
app!.appendChild(Nav);
app!.appendChild(Content);

export type tab = "current" | "hourly" | "daily";

let activeTab: tab = "current";
function setActiveTab(newActiveTab: "current" | "hourly" | "daily") {
  activeTab = newActiveTab;
}

let unit: "celsius" | "fahrenheit" = "celsius";
function toggleUnit() {
  unit = unit == "celsius" ? "fahrenheit" : "celsius";
}

let location: string = "phuoc kien";
function setLocation(newLocation: string) {
  location = newLocation;
}

setActiveNav("current");

// fetchWeatherData(location, unit );

async function logWeatherData() {
  console.log( await fetchWeatherData(location, unit));
}

export async function renderData() {
  Content.textContent = 'Loading';
  const weatherData = await fetchWeatherData(location, unit);

  Content.textContent = '';

  renderCurrentData(weatherData);
  renderDailyForecast(weatherData.days);
  renderHourlyForecast(weatherData.days[0].hours);
}

renderData();

logWeatherData();
export { activeTab, setActiveTab, location, setLocation, unit, toggleUnit };
