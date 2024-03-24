import { ForeCastType } from '@/@types/weather';

type WeatherTodayTypes = {
  todayForeCast: ForeCastType | undefined;
};

const WeatherForeCastToday = (props: WeatherTodayTypes) => {
  const { todayForeCast } = props;
  console.log(todayForeCast);

  return <div />;
};

export default WeatherForeCastToday;
