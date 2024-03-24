import { ReactNode } from 'react';

interface WeatherInfoProps {
  icon: ReactNode;
  label: string;
  value: string | number;
}

const WeatherInfo = ({ icon, label, value }: WeatherInfoProps) => {
  return (
    <div className="flex gap-2">
      {icon}
      <div>
        <p className="text-sm opacity-80">{label}</p>
        <b className="text-lg">{value}</b>
      </div>
    </div>
  );
};

export default WeatherInfo;
