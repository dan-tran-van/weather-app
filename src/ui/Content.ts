import { setActiveTab, tab } from '../main';
import { renderCurrentData } from './Content/Current/Current.ts';
import { renderDailyForecast } from './Content/Daily/Daily.ts';
import { renderHourlyForecast } from './Content/Hourly/Hourly.ts';

export const Content = document.createElement("main");

// const WeatherIcon = document.createElement("img");
// WeatherIcon.src = '/icons/clear-night.svg';

// Content.appendChild(WeatherIcon);

export function setActiveContent(newActiveContent: tab) {

}



