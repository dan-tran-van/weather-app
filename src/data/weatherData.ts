export interface WeatherData {
  resolvedAddress: string;
  address: string;
  timezone: string;
  tzoffset: number;
  description: string;
  days: Day[];
  alerts: any[];
  currentConditions: CurrentConditions;
}

export interface CurrentConditions {
  datetime: string;
  datetimeEpoch: number;
  temp: number;
  feelslike: number;
  humidity: number;
  dew: number;
  precip: number;
  precipprob: number;
  snow: number;
  snowdepth: number;
  preciptype: string[];
  windgust?: any;
  windspeed: number;
  winddir: number;
  pressure: number;
  visibility: number;
  cloudcover: number;
  solarradiation: number;
  solarenergy: number;
  uvindex: number;
  conditions: string;
  icon: string;
  sunrise: string;
  sunriseEpoch: number;
  sunset: string;
  sunsetEpoch: number;
  moonphase: number;
}

export interface Day {
  datetime: string;
  datetimeEpoch: number;
  tempmax: number;
  tempmin: number;
  temp: number;
  feelslikemax: number;
  feelslikemin: number;
  feelslike: number;
  dew: number;
  humidity: number;
  precip: number;
  precipprob: number;
  precipcover: number;
  preciptype: string[];
  snow: number;
  snowdepth: number;
  windgust: number;
  windspeed: number;
  winddir: number;
  pressure: number;
  cloudcover: number;
  visibility: number;
  solarradiation: number;
  solarenergy: number;
  uvindex: number;
  severerisk: number;
  sunrise: string;
  sunriseEpoch: number;
  sunset: string;
  sunsetEpoch: number;
  moonphase: number;
  conditions: string;
  description: string;
  icon: string;
  hours: Hour[];
}

export interface Hour {
  datetime: string;
  datetimeEpoch: number;
  temp: number;
  feelslike: number;
  humidity: number;
  dew: number;
  precip: number;
  precipprob: number;
  snow: number;
  snowdepth: number;
  preciptype?: string[];
  windgust: number;
  windspeed: number;
  winddir: number;
  pressure: number;
  visibility: number;
  cloudcover: number;
  solarradiation: number;
  solarenergy: number;
  uvindex: number;
  severerisk: number;
  conditions: string;
  icon: string;
}

async function fetchWeatherData(
  location: string,
  unit: "celsius" | "fahrenheit"
) {
  const unitGroup = unit == "celsius" ? "metric" : "us";

  const weatherDataPromise = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=${unitGroup}&key=${
      import.meta.env.VITE_API_KEY
    }&contentType=json`,
    {
      mode: "cors",
    }
  );
  const weatherData: WeatherData = await weatherDataPromise.json();
  return weatherData;
}

export { fetchWeatherData };
