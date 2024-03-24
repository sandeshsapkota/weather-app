import { ReactNode } from 'react';

interface WeatherInfoProps {
  icon: ReactNode;
  label: string;
  value: string | number;
}

const WeatherInfo = ({ icon, label, value }: WeatherInfoProps) => {
  return (
    <div className="flex flex-col sm:flex-row gap-3 items-center justify-center bg-charade-600 p-4 sm:p-6 rounded-xl">
      {icon}
      <div className="text-center">
        <b className="text-xs sm:text-xl">{value}</b>
        <p className="text-xs sm:text-base opacity-80">{label}</p>
      </div>
    </div>
  );
};

export default WeatherInfo;
