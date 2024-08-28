import { WeatherData, Day, Hour } from './weatherData';

export function getDailyForecast(weatherData: WeatherData) {
  const dailyForecast = weatherData.days;

  return dailyForecast;
}