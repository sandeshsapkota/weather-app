import WeatherIllustration from '@/assets/illustration/weather-app.svg?react';
import { OpacityFader } from '@/components';

const WeatherPlaceholder = () => {
  return (
    <OpacityFader animate>
      <div className="bg-charade-500 sm:h-[600px] flex flex-col items-center justify-center rounded-xl p-12 overflow-hidden">
        <WeatherIllustration className="w-full sm:w-[400px] sm:h-[400px] opacity-80 -mt-32 sm:-mt-10 -mb-32 sm:mb-0" />
        <p className="text-md text-center opacity-80">
          Please allow your location or select a city to see weather
          forecasting.
        </p>
      </div>
    </OpacityFader>
  );
};

export default WeatherPlaceholder;
