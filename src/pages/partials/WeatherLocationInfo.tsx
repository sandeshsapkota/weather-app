interface WeatherLocationInfoType {
  currentLocation: string;
  dateToday: string;
  description: string;
  isLoading: boolean;
}
const WeatherLocationInfo = ({
  currentLocation,
  dateToday,
  description,
}: WeatherLocationInfoType) => {
  return (
    <div>
      <h2 className="text-2xl sm:text-5xl font-bold opacity-80">
        {currentLocation}
      </h2>
      <p className="sm:text-2xl font-semibold opacity-90">{dateToday}</p>
      <div className="capitalize pt-3 opacity-80">{description}</div>
    </div>
  );
};

export default WeatherLocationInfo;
