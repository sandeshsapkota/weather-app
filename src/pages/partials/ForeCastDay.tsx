import { ForeCastType } from '@/@types/weather';
import { findDay } from '@/utils/helpers/common.utils';
import {
  CloudsIcon,
  HumidityIcon,
  TemperatureIcon,
  WindIcon,
} from '@/components/icons';
import { getWeatherIconUrl } from '@/utils/helpers/weather.utils';

const ForeCastDays = ({ day }: { day: ForeCastType }) => {
  /*
   * PROPS
   * */
  const { weather, dt_txt, main, clouds, wind } = day;
  const weekday = findDay(dt_txt);

  const { description } = weather[0];

  const { humidity, temp: temperature } = main;
  console.log(day?.weather[0].main);

  return (
    <div className="bg-charade-600 py-2.5 px-3 rounded grid grid-cols-3 gap-2 text-sm">
      <div className="flex flex-col gap-2">
        <b> {weekday}</b>
        <div className="flex items-center gap-1.5">
          <img className="w-8" src={getWeatherIconUrl(day)} alt="weather" />
          <p className="text-sm capitalize">{description}</p>
        </div>
      </div>
      <div className="grid gap-0.5">
        <div className="flex gap-2">
          <TemperatureIcon className="w-5 h-5 self-end -translate-y-1" />{' '}
          <div>
            <p className="text-[11px] opacity-80 -mb-1">Temperature</p>
            <b>{temperature}&deg;C</b>
          </div>
        </div>
        <div className="flex  gap-2">
          <CloudsIcon className="w-5 h-5 self-end -translate-y-1" />{' '}
          <div>
            <p className="text-[11px] opacity-80 -mb-1">Clouds</p>
            <b>{clouds.all}%</b>
          </div>
        </div>
      </div>
      <div className="grid gap-0.5">
        <div className="flex gap-2">
          <HumidityIcon className="w-5 h-5 self-end -translate-y-1" />{' '}
          <div>
            <p className="text-[11px] opacity-80 -mb-1">Humidity</p>
            <b>{humidity} %</b>
          </div>
        </div>
        <div className="flex  gap-2">
          <WindIcon className="w-4 h-4 self-end -translate-y-1" />{' '}
          <div>
            <p className="text-[11px] opacity-80 -mb-1">Wind speed </p>
            <b>{wind.speed} m/s</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForeCastDays;
