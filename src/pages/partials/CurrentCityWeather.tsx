import {ForeCastType, WeatherType} from '@/@types/weather';
import {LocationType} from '@/@types/common';

import WeatherDisplay from '@/pages/partials/WeatherDisplay';
import WeatherLocationInfo from '@/pages/partials/WeatherLocationInfo';
import HourlyForecast from '@/pages/partials/HourlyForecast';

type CurrentCityWeatherType = {
  weather: WeatherType | undefined;
  location: LocationType | undefined;
  isLoading: boolean;
  todayForeCast: ForeCastType[] | undefined;
};

const CurrentCityWeather = (props: CurrentCityWeatherType) => {
  const { todayForeCast, weather, location, isLoading } = props;
  return (
    <div className="grid gap-8">
      <div className="grid gap-6 bg-charade-500 p-4 sm:p-6 rounded-xl ">
        <WeatherLocationInfo location={location} weather={weather} />
        <WeatherDisplay weather={weather} isLoading={isLoading} />
      </div>
      <HourlyForecast todayForeCast={todayForeCast} isLoading={isLoading} />
    </div>
  );
};

export default CurrentCityWeather;
