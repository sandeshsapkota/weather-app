import { ForeCastType } from '@/@types/weather';
import ForeCastDay from '@/pages/partials/ForeCastDay';

type ForCastDaysType = {
  isLoading: boolean;
  forecastDays: { [key: string]: ForeCastType[] };
};

const ForeCastDays = (props: ForCastDaysType) => {
  const { isLoading, forecastDays } = props;

  const filteredDays = Object.keys(forecastDays).map(
    (key) => forecastDays[key][0],
  );

  const renderSkeleton = () => {
    return 'loading';
  };

  const renderList = () => {
    return filteredDays.map((day) => (
      <ForeCastDay key={day.dt_txt} day={day} />
    ));
  };

  return (
    <div className="grid gap-4">
      <h2>Weekly Forecast</h2>
      <div className="grid gap-4">
        {isLoading ? renderSkeleton() : renderList()}
      </div>
    </div>
  );
};

export default ForeCastDays;
