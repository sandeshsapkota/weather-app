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
  const weatherInfoArray = [
    {
      icon: <TemperatureIcon className="w-5 h-5 self-end -translate-y-1" />,
      label: 'Temperature',
      value: `${temperature}°C`,
    },
    {
      icon: <CloudsIcon className="w-5 h-5 self-end -translate-y-1" />,
      label: 'Clouds',
      value: `${clouds.all}%`,
    },
    {
      icon: <HumidityIcon className="w-5 h-5 self-end -translate-y-1" />,
      label: 'Humidity',
      value: `${humidity}%`,
    },
    {
      icon: <WindIcon className="w-4 h-4 self-end -translate-y-1" />,
      label: 'Wind speed',
      value: `${wind.speed} m/s`,
    },
  ];

  return (
    <div className="bg-charade-600 py-2.5 px-3 rounded flex flex-col lg:grid lg:grid-cols-3 gap-2 text-sm">
      <div className="w-full lg:w-auto  flex  justify-between lg:justify-start items-center lg:items-start lg:flex-col gap-2">
        <b> {weekday}</b>
        <div className="flex items-center gap-1.5">
          <img className="w-8" src={getWeatherIconUrl(day)} alt="weather" />
          <p className="text-sm capitalize">{description}</p>
        </div>
      </div>
      <div className="grid gap-3 sm:gap-1 grid-cols-2 col-span-2">
        {weatherInfoArray.map((info, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div key={index} className="flex gap-2">
            {info.icon}{' '}
            <div>
              <b>{info.value}</b>
              <p className="text-[11px] opacity-80 -mb-1">{info.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForeCastDays;
