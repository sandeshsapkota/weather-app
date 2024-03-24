import { WeatherType } from '@/@types/weather';

import { HumidityIcon, TemperatureIcon, WindIcon } from '@/components/icons';
import WeatherInfo from '@/pages/partials/WeatherInfo';

type CurrentCityWeatherType = {
  weather: WeatherType | undefined;
  isLoading: boolean;
};

const WeatherDisplay = ({ isLoading, weather }: CurrentCityWeatherType) => {
  const { wind, clouds, main } = weather ?? {};
  const humidity = main?.humidity;
  console.log(isLoading);
  const weatherInfoData = [
    {
      icon: <TemperatureIcon className="w-7 h-7 opacity-80" />,
      label: 'Clouds',
      value: `${clouds?.all ?? 'N/A'}%`,
    },
    {
      icon: <WindIcon className="w-7 h-7 opacity-80" />,
      label: 'Wind speed',
      value: `${wind?.speed ?? 'N/A'} m/s`,
    },
    {
      icon: <HumidityIcon className="w-7 h-7 opacity-80" />,
      label: 'Humidity',
      value: `${humidity ?? 'N/A'}%`,
    },
  ];

  return (
    <div className="grid grid-cols-3 gap-3 sm:gap-5">
      {weatherInfoData.map((info) => (
        <WeatherInfo
          key={info.label}
          icon={info.icon}
          label={info.label}
          value={info.value}
        />
      ))}
    </div>
  );
};

export default WeatherDisplay;
