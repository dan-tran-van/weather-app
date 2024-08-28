import { Content } from "../../Content.ts";
import { Hour } from "../../../data/weatherData.ts";

export async function renderHourlyForecast(hourlyForecasts: Hour[]) {
  const HourlySection = document.createElement("div");
  HourlySection.classList.add("main__hourly")
  HourlySection.textContent = "Hourly";
  const currentTime = new Date(Date.now());
  const currentTimeHour = currentTime.getHours();


  hourlyForecasts.forEach((hour, index) => {
    const hourNumber: number = Number(hour.datetime.split(':')[0]);
    if (hourNumber >= currentTimeHour) {
      const HourForecast = document.createElement("div");
      HourForecast.classList.add("hour-forecast");

      const HourTime = document.createElement("div");
      HourTime.classList.add("hour-forecast__hourtime");
      if (hourNumber == currentTimeHour) {
        HourTime.textContent = 'Now';
      } else {
        HourTime.textContent = formatAMPM(hourNumber);
      }

      const ForecastIcon = document.createElement("div");
      ForecastIcon.classList.add("hour-forecast__icon");
      const ForecastImage = document.createElement("img");
      ForecastImage.src = `/icons/${hour.icon}.svg`;
      ForecastIcon.append(ForecastImage);

      const ForecastTemp = document.createElement("div");
      ForecastTemp.classList.add("hour-forecast__temp");
      ForecastTemp.textContent = `${hour.temp}°`;

      HourForecast.append(HourTime, ForecastIcon, ForecastTemp);

      HourlySection.append(HourForecast);
    }
  });

  Content.appendChild(HourlySection);
}

function formatAMPM(hour:number) {
  const AMOrPM = hour >= 12 ? 'PM' : 'AM';
  let hours = hour % 12;
  hours = hours ? hours : 12;
  return hours + ` ${AMOrPM}`;
}