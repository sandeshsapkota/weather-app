import { ForeCastType, WeatherType } from '@/@types/weather';

/**
 * Retrieves the URL for the weather icon corresponding to the provided weather data.
 * @param weather The weather data containing information about the current weather conditions.
 * @returns A URL pointing to the weather icon image.
 */
const getWeatherIconUrl = (weather: WeatherType | ForeCastType | undefined) => {
  if (!weather) return '';
  const { icon } = weather.weather[0];
  return icon ? `https://openweathermap.org/img/wn/${icon}@2x.png` : '';
};

export { getWeatherIconUrl };
