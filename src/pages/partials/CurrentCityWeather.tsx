import dayjs from 'dayjs';
import { getCountry } from 'iso-3166-1-alpha-2';

import { ForeCastType, WeatherType } from '@/@types/weather';
import { LocationType } from '@/@types/common';

import WeatherDisplay from '@/pages/partials/WeatherDisplay';
import WeatherLocationInfo from '@/pages/partials/WeatherLocationInfo';
import WeatherForecastToday from '@/pages/partials/WeatherForecastToday';

type CurrentCityWeatherType = {
  weather: WeatherType | undefined;
  location: LocationType | undefined;
  isLoading: boolean;
  todayForeCast: ForeCastType | undefined;
};

const CurrentCityWeather = (props: CurrentCityWeatherType) => {
  const { todayForeCast, weather, location, isLoading } = props;
  const { name, weather: weatherList } = weather || {};
  const description = weatherList?.length ? weatherList[0].description : '';

  const currentLocation = `${name} ${location?.name}, ${
    weather?.sys.country ? getCountry(weather.sys.country) : ''
  }`;
  const dateToday = dayjs().format('dddd D MMMM');

  return (
    <div className="bg-charade-500 p-8 rounded-xl">
      <div className="grid gap-8">
        <WeatherLocationInfo
          currentLocation={currentLocation}
          dateToday={dateToday}
          description={description}
          isLoading={isLoading}
        />
        <WeatherDisplay weather={weather} isLoading={isLoading} />
        <WeatherForecastToday todayForeCast={todayForeCast} />
      </div>
    </div>
  );
};

export default CurrentCityWeather;
