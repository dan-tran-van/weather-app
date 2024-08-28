import { WeatherData } from './weatherData';

export function getCurrentConditions(weatherData: WeatherData) {
  return {
    currentConditions: weatherData.currentConditions,
    description: weatherData.description,
    icon: weatherData.currentConditions.icon
  }
}