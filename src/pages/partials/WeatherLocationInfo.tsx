import { getCountry } from 'iso-3166-1-alpha-2';
import dayjs from 'dayjs';
import { WeatherType } from '@/@types/weather';
import { LocationType } from '@/@types/common';
import { getWeatherIconUrl } from '@/utils/helpers/weather.utils';

interface WeatherLocationInfoType {
  weather: WeatherType | undefined;
  location: LocationType | undefined;
}

const WeatherLocationInfo = ({
  weather,
  location,
}: WeatherLocationInfoType) => {
  const { name, weather: weatherList } = weather || {};

  const description = weatherList?.length ? weatherList[0].description : '';
  const country = weather?.sys.country ? getCountry(weather.sys.country) : '';
  const dateToday = dayjs().format('dddd D MMMM');

  if (weather) {
    return (
      <div className="flex gap-6 flex-wrap items-start justify-between">
        <div>
          <h2 className="text-2xl sm:text-3xl font-semibold">
            {`${name} ${name !== location?.name ? location?.name : ''}, ${country}`}
          </h2>
          <p className="text-lg font-medium">{dateToday}</p>
        </div>
        <div className="flex items-center gap-4">
          <img
            className="w-20 self-start -mt-2 order-1 sm:-order-1"
            src={getWeatherIconUrl(weather)}
            alt="weather"
          />
          <div className="grid gap-2">
            <h2 className="text-5xl text-primary-600 font-bold">
              {Math.floor(weather?.main.temp)}°C
            </h2>
            <p className="capitalize opacity-80 ">{description}</p>
            <p className="capitalize -mt-2 text-sm">
              Feels like <b>{weather?.main.feels_like} °C</b>
            </p>
          </div>
        </div>
      </div>
    );
  }

  return '';
};

export default WeatherLocationInfo;
