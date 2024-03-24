import classNames from 'classnames';
import { generateIncrementalArray } from '@/utils/helpers/common.utils';

const Skeletons = ({ count, classes }: { count: number; classes?: string }) => {
  return generateIncrementalArray(count).map((item) => (
    <div
      key={item}
      className={classNames(
        'animate-pulse bg-charade-400 rounded-xl h-24',
        classes,
      )}
    />
  ));
};

export default Skeletons;
