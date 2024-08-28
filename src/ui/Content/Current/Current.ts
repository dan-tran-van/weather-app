import { Content } from '../../Content.ts';
import { CurrentConditions, WeatherData } from '../../../data/weatherData.ts';
import { renderCurrentGeneral } from './General.ts';
import { renderDetailCurrent } from './Details.ts';

export async function renderCurrentData(weatherData: WeatherData) {
  const CurrentSection = document.createElement("div");
  CurrentSection.textContent = 'Current';
  CurrentSection.classList.add("main__current");

  const GeneralInfo = document.createElement("div");
  GeneralInfo.classList.add("current__general");

  const Location = document.createElement("div");
  Location.textContent = `${weatherData.resolvedAddress}`;

  const Temperature = document.createElement("div");
  Temperature.textContent = `${weatherData.currentConditions.temp}°`;

  const WeatherIconWrapper = document.createElement("div");
  WeatherIconWrapper.classList.add("general__weather-wrapper")

  const WeatherIcon = document.createElement("img");
  WeatherIcon.src = `/icons/${weatherData.currentConditions.icon}.svg`;

  WeatherIconWrapper.appendChild(WeatherIcon);

  const FeelsLike = document.createElement("div");
  FeelsLike.textContent = `Feels likes: ${weatherData.currentConditions.feelslike}°`;

  GeneralInfo.append(Location, Temperature, WeatherIconWrapper, FeelsLike);
    
  CurrentSection.appendChild(GeneralInfo);
  
  Content.appendChild(CurrentSection);
  renderDetailCurrent(weatherData.currentConditions);
}