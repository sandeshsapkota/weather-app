import dayjs from 'dayjs';
import { ForeCastType } from '@/@types/weather';
import { WindIcon } from '@/components/icons';
import {getWeatherIconUrl} from "@/utils/helpers/weather.utils";

type WeatherTodayTypes = {
  todayForeCast: ForeCastType[] | undefined;
  isLoading: boolean;
};

type HourlyForeCastType = {
  hour: ForeCastType | undefined;
};

const HourlyForeCastItem = ({ hour }: HourlyForeCastType) => {
  return (
    <div className="gap-2 p-6 rounded-xl bg-charade-600 flex flex-col items-center justify-between">
      <b>{dayjs(hour?.dt_txt).format('HH:mm')}</b>
      <div>
        <img
          className="w-14"
          src={getWeatherIconUrl(hour)}
          alt="weather"
        />
        <b className="-mt-2 block">{hour?.main.temp}°C</b>
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
    console.log(isLoading)
  return (
    <div className="bg-charade-500 p-6 rounded-xl  flex flex-col gap-6">
      <h2 className="font-bold text-lg">
        {todayForeCast?.length} forecast available
      </h2>
      <div className="grid gap-3 grid-cols-4 flex-1">
        {todayForeCast?.length &&
          todayForeCast.map((hourForecast) => (
            <HourlyForeCastItem key={hourForecast.dt} hour={hourForecast} />
          ))}
      </div>
    </div>
  );
};

export default HourlyForecast;