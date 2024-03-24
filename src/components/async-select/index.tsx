import AsyncSelect from 'react-select/async';
import { CSSObjectWithLabel } from 'react-select';
import { SuggestionType } from '@/pages/partials/LocationSearch';
import { SearchIcon } from '@/components/icons';

const CustomAsyncSelect = ({
  fetchHandler,
  handleChange,
  placeholder,
}: {
  fetchHandler: (input: string) => Promise<SuggestionType[] | []>;
  handleChange: (value: any) => void;
  placeholder?: string;
}) => {
  return (
    <AsyncSelect
      placeholder={placeholder}
      cacheOptions
      defaultOptions
      loadOptions={fetchHandler}
      onChange={handleChange}
      components={{
        DropdownIndicator: () => (
          <div className="pr-3 text-gray-700">
            <SearchIcon className="w-[18px] h-[18px]" />
          </div>
        ),
        IndicatorSeparator: null,
      }}
      styles={{
        control: (provided: CSSObjectWithLabel) => ({
          ...provided,
          outline: 'none',
          fontSize: 14,
          borderRadius: 20,
          paddingLeft: 6,
        }),
        option: (styles) => ({
          ...styles,
          cursor: 'pointer',
          color: '#334155',
        }),
      }}
    />
  );
};
export default CustomAsyncSelect;
