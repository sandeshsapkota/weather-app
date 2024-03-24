import { ForeCastType, WeatherType } from '@/@types/weather';
import { LocationType } from '@/@types/common';

import WeatherDisplay from '@/pages/partials/WeatherDisplay';
import WeatherLocationInfo from '@/pages/partials/WeatherLocationInfo';
import HourlyForecast from '@/pages/partials/HourlyForecast';
import ErrorComponent from '@/components/error/ErrorComponent';

type CurrentCityWeatherType = {
  weather: WeatherType | undefined;
  location: LocationType | undefined;
  isLoading: boolean;
  todayForeCast: ForeCastType[] | undefined;
  hasError: boolean;
};

const CurrentCityWeather = (props: CurrentCityWeatherType) => {
  const { todayForeCast, weather, location, isLoading, hasError } = props;

  if (hasError) {
    return <ErrorComponent />;
  }

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
