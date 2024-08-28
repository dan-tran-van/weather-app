import { Content } from '../../Content.ts';
import { CurrentConditions } from '../../../data/weatherData.ts';
import { renderCurrentGeneral } from './General.ts';
import { renderDetailCurrent } from './Details.ts';

export async function renderCurrentData(currentConditions: CurrentConditions ) {
  const CurrentSection = document.createElement("div");
  CurrentSection.textContent = 'Current';
  CurrentSection.classList.add("main__current");

  const GeneralInfo = document.createElement("div");
  GeneralInfo.classList.add("current__general");

  const Temperature = document.createElement("div");
  Temperature.textContent = `${currentConditions.temp}°`;

  const WeatherIconWrapper = document.createElement("div");
  WeatherIconWrapper.classList.add("general__weather-wrapper")

  const WeatherIcon = document.createElement("img");
  WeatherIcon.src = `/icons/${currentConditions.icon}.svg`;

  WeatherIconWrapper.appendChild(WeatherIcon);

  const FeelsLike = document.createElement("div");
  FeelsLike.textContent = `Feels likes: ${currentConditions.feelslike}°`;

  GeneralInfo.appendChild(Temperature);
  GeneralInfo.appendChild(WeatherIconWrapper);
  GeneralInfo.appendChild(FeelsLike);

  
  CurrentSection.appendChild(GeneralInfo);
  
  Content.appendChild(CurrentSection);
  renderDetailCurrent(currentConditions);
}