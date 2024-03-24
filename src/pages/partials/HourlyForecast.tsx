import dayjs from 'dayjs';
import { ForeCastType } from '@/@types/weather';
import { WindIcon } from '@/components/icons';
import { getWeatherIconUrl } from '@/utils/helpers/weather.utils';
import Skeletons from '@/components/skeletons';

type WeatherTodayTypes = {
  todayForeCast: ForeCastType[] | undefined;
  isLoading: boolean;
};

type HourlyForeCastType = {
  hour: ForeCastType | undefined;
};

const HourlyForeCastItem = ({ hour }: HourlyForeCastType) => {
  return (
    <div className="gap-4 p-6 rounded-xl bg-charade-600 flex flex-col items-center justify-between">
      <b>{dayjs(hour?.dt_txt).format('HH:mm')}</b>
      <div className="mb-4">
        <img className="w-14" src={getWeatherIconUrl(hour)} alt="weather" />
        <b className="-mt-2 block text-primary-600">{hour?.main.temp}°C</b>
      </div>
      <div className="grid place-items-center">
        <WindIcon />
        <div className="text-center">{hour?.wind.speed} m/h</div>
      </div>
    </div>
  );
};

const HourlyForecast = (props: WeatherTodayTypes) => {
  const { todayForeCast, isLoading } = props;

  return (
    <div className="mt-auto bg-charade-500 p-4 sm:p-6 rounded-xl flex flex-col gap-6">
      <h2 className="font-semibold text-lg">
        {todayForeCast?.length} forecasts available
      </h2>
      <div className="grid gap-5 grid-cols-2 lg:grid-cols-4 flex-1">
        {isLoading ? (
          <Skeletons count={4} classes="sm:h-[240px]" />
        ) : (
          todayForeCast?.length &&
          todayForeCast.map((hourForecast) => (
            <HourlyForeCastItem key={hourForecast.dt} hour={hourForecast} />
          ))
        )}
      </div>
    </div>
  );
};

export default HourlyForecast;
