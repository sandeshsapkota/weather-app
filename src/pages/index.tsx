import { useQuery } from '@tanstack/react-query';
import { groupBy } from 'lodash';
import dayjs from 'dayjs';
import WeatherService from '@/services/weather.service';
import ForCastDays from '@/pages/partials/ForeCastDays';
import LocationSearch from '@/pages/partials/LocationSearch';
import CurrentCityWeather from '@/pages/partials/CurrentCityWeather';
import { LocationType } from '@/@types/common';
import useLocationData from '@/hooks/useLocationData';
import WeatherPlaceholder from '@/pages/partials/WeatherPlcacholder';
import { ForeCastType } from '@/@types/weather';

const Index = () => {
  const { location, setLocation, setUserLocation } = useLocationData();
  const { data: weatherData, isLoading: isWeatherLoading } = useQuery({
    queryKey: ['weather-data', location],
    queryFn: () => WeatherService.fetchWeather(location as LocationType),
    enabled: Boolean(location),
  });

  const { data: forecastData, isLoading: isForecastLoading } = useQuery({
    queryKey: ['forecast-data', location],
    queryFn: () => WeatherService.fetchForecast(location as LocationType),
    enabled: Boolean(location),
  });

  const groupedForeCastByDays: { [key: string]: ForeCastType[] } =
    (Array.isArray(forecastData) &&
      groupBy(forecastData, (obj: ForeCastType) => obj.dt_txt.split(' ')[0])) ||
    {};

  const todayForeCast = groupedForeCastByDays[
    dayjs().format('YYYY-MM-DD')
  ] as unknown as ForeCastType;

  return (
    <div className="min-h-screen pb-8 bg-charade-700 text-white">
      <div className="container grid gap-6 ">
        <LocationSearch
          setCoordinates={setLocation}
          setUserLocation={setUserLocation}
        />
        <div className="p-6 sm:p-8 bg-charade-600 rounded-xl">
          {location?.lat ? (
            <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 ">
              <CurrentCityWeather
                weather={weatherData}
                location={location}
                isLoading={isWeatherLoading}
                todayForeCast={todayForeCast}
              />
              <ForCastDays
                isLoading={isForecastLoading}
                forecastDays={groupedForeCastByDays}
              />
            </div>
          ) : (
            <WeatherPlaceholder />
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
