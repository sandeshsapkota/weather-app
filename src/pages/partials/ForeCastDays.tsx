import dayjs from 'dayjs';
import { ForeCastType } from '@/@types/weather';
import ForeCastDay from '@/pages/partials/ForeCastDay';
import ErrorComponent from '@/components/error/ErrorComponent';
import Skeletons from '@/components/skeletons';

type ForCastDaysType = {
  isLoading: boolean;
  hasError: boolean;
  forecastDays: { [key: string]: ForeCastType[] };
};

const ForeCastDays = (props: ForCastDaysType) => {
  const { isLoading, hasError, forecastDays } = props;

  if (hasError) {
    return <ErrorComponent />;
  }

  /*
   * each day has multiple forecasts
   * choosing one and removing the today's forecast
   * */
  const filteredDays = Object.keys(forecastDays)
    .map((key) => forecastDays[key][0])
    .filter((item) => !item.dt_txt.includes(dayjs().format('YYYY-MM-DD')));

  const renderSkeleton = () => {
    return <Skeletons count={5} />;
  };

  const renderList = () => {
    return filteredDays.map((day) => (
      <ForeCastDay key={day.dt_txt} day={day} />
    ));
  };

  return (
    <div className="grid gap-4 bg-charade-500 p-4 sm:p-6 rounded-xl">
      <h2 className="text-lg font-semibold">5 Days Forecast</h2>
      <div className="grid gap-5 w-full">
        {isLoading ? renderSkeleton() : renderList()}
      </div>
    </div>
  );
};

export default ForeCastDays;
