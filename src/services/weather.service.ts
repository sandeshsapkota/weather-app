import http from '@/utils/http/http.utils';

import { ForeCastType, WeatherType } from '@/@types/weather';
import { LocationType } from '@/@types/common';

class WeatherService {
  /**
   * Fetches weather data from the provided API
   * @returns {Promise<Object>} The weather forecast data
   */
  static async fetchWeather(coordinates: LocationType): Promise<WeatherType> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const queryParams: Record<string, string> = new URLSearchParams({
      lat: String(coordinates?.lat),
      lon: String(coordinates?.lon),
      appid: import.meta.env.VITE_APP_API_KEY,
      units: 'metric',
    });

    try {
      const response = await http().get(`weather?${queryParams.toString()}`);
      return response.data;
    } catch (e) {
      console.log(e);
      throw new Error('Something went wrong.');
    }
  }

  /**
   * Fetches the forecast data from the API.
   * @returns {Promise<object | unknown>} The fetched forecast data or an error.
   */

  static async fetchForecast(
    coordinates: LocationType,
  ): Promise<ForeCastType[]> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    const queryParams: Record<string, string> = new URLSearchParams({
      lat: String(coordinates?.lat),
      lon: String(coordinates?.lon),
      appid: import.meta.env.VITE_APP_API_KEY,
      units: 'metric',
    });
    try {
      const url = `forecast?${queryParams.toString()}`;
      const response = await http().get(url);
      return response.data.list;
    } catch (e) {
      console.log(e);
      throw new Error('Something went wrong.');
    }
  }
}

export default WeatherService;
