import { WeatherType } from '@/@types/weather';
import { HumidityIcon, TemperatureIcon, WindIcon } from '@/components/icons';
import WeatherInfo from '@/pages/partials/WeatherInfo';

type CurrentCityWeatherType = {
  weather: WeatherType | undefined;
  isLoading: boolean;
};

const WeatherDisplay = (props: CurrentCityWeatherType) => {
  const { isLoading, weather } = props;
  const { wind, clouds, main } = weather || {};
  const { humidity, temp: temperature } = main || {};
  console.log(isLoading);
  return (
    <div className="flex flex-wrap gap-6 justify-between">
      <WeatherInfo
        icon={<TemperatureIcon className="w-6 h-6 self-end -translate-y-1.5" />}
        label="Temperature"
        value={`${temperature} °C`}
      />
      <WeatherInfo
        icon={<TemperatureIcon className="w-6 h-6 self-end -translate-y-1.5" />}
        label="Clouds"
        value={`${clouds?.all}%`}
      />
      <WeatherInfo
        icon={<WindIcon className="w-6 h-6 self-end -translate-y-1.5" />}
        label="Wind speed"
        value={`${wind?.speed} m/s`}
      />
      <WeatherInfo
        icon={<HumidityIcon className="w-6 h-6 self-end -translate-y-1.5" />}
        label="Humidity"
        value={`${humidity}%`}
      />
    </div>
  );
};

export default WeatherDisplay;
