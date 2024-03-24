import http from '@/utils/http/http.utils';
import { CityType } from '@/@types/weather';

const API_KEY = 'd4d0b0c4a9mshc95514023bd19f9p153870jsn805fcb60ab6e';
const API_HOST = 'city-by-api-ninjas.p.rapidapi.com';

class LocationService {
  /**
   * Fetches information about cities from an external api.
   * @param city (optional) A string representing the name of the city for which information is to be fetched.
   * @returns A Promise that resolves to an object representing city data, or rejects with an unknown error if the retrieval process fails.
   */
  static async fetchCities(city?: string): Promise<CityType[]> {
    try {
      const url = `https://city-by-api-ninjas.p.rapidapi.com/v1/city${
        city ? `?name=${city}` : ''
      }`;

      const response = await http({
        additionalHeader: {
          'X-RapidAPI-Key': API_KEY,
          'X-RapidAPI-Host': API_HOST,
        },
      }).get(url);
      return response.data;
    } catch (e) {
      console.log(e);
      throw new Error('Something went wrong.');
    }
  }
}

export default LocationService;
