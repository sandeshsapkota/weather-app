import AsyncSelect from 'react-select/async';
import { CSSObjectWithLabel } from 'react-select';
import { forwardRef, useImperativeHandle, useState } from 'react';

type SelectPropTypes = {
  fetchHandler: (query: string, callback: (data: any) => void) => void;
  handleChange: (value: any) => void;
  placeholder?: string;
};

const CustomAsyncSelect = forwardRef(function CustomAsyncSelect(
  { fetchHandler, handleChange, placeholder }: SelectPropTypes,
  ref,
) {
  const [value, setValue] = useState(undefined);

  const handleOnChange = (value: any) => {
    setValue(value);
    handleChange(value);
  };

  useImperativeHandle(
    ref,
    () => {
      return {
        clearInput: () => setValue(undefined),
      };
    },
    [],
  );

  return (
    <AsyncSelect
      placeholder={placeholder}
      cacheOptions
      defaultOptions
      loadOptions={fetchHandler}
      onChange={handleOnChange}
      value={value}
      key={value}
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
});

export default CustomAsyncSelect;
