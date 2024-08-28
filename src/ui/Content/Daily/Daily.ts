import { Content } from '../../Content.ts';
import { Day } from "../../../data/weatherData.ts";


const dayNames = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
]

export async function renderDailyForecast(dailyForecasts: Day[] ) {
  const DailySection = document.createElement("div");
  DailySection.classList.add("main__daily")
  DailySection.textContent = 'Daily';

  dailyForecasts.forEach((day, index) => {
    const DayForecast = document.createElement("div");
    const DateObj = new Date(day.datetime);
    DayForecast.classList.add("day-forecast");

    const DayTime = document.createElement("div");
    DayTime.classList.add("day-forecast__daytime");
    if (index == 0) {
      DayTime.textContent = 'Today';
    } else {
      DayTime.textContent = `${dayNames[DateObj.getDay()]}`;
    }


    const ForecastIcon = document.createElement("div");
    ForecastIcon.classList.add("day-forecast__icon");
    const ForecastImage = document.createElement("img");
    ForecastImage.src = `/icons/${day.icon}.svg`;
    ForecastIcon.appendChild(ForecastImage);


    const ForecastTempMax = document.createElement("div");
    ForecastTempMax.classList.add("day-forecast__temp-max");
    ForecastTempMax.textContent = `${day.tempmax}°`;

    const ForecastTempMin = document.createElement("div");
    ForecastTempMin.classList.add("day-forecast__temp-min");
    ForecastTempMin.textContent = `${day.tempmin}°`;

    DayForecast.append(DayTime, ForecastIcon, ForecastTempMax, ForecastTempMin)

    DailySection.appendChild(DayForecast);
  })



  Content.appendChild(DailySection);
}
