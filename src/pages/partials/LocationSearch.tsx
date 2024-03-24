import {getCountry} from 'iso-3166-1-alpha-2';
import {debounce} from 'lodash';
import LocationService from '@/services/location.service';
import CustomAsyncSelect from '@/components/async-select';

import {CityType} from '@/@types/weather';
import {LatLonType, LocationType} from '@/@types/common';
import Logo from '@/components/logo';
import {Button} from '@/components';

type LocationProp = {
  setCoordinates: (value: LocationType) => void;
  setUserLocation: () => void;
};

export type SuggestionType = LatLonType & {
  label: string;
  value: string;
};

const LocationSearch = (props: LocationProp) => {
  const { setCoordinates, setUserLocation } = props;

  /*
   * formatting the response
   * */
  const formatData = (data: CityType[]): SuggestionType[] | [] => {
    if (Array.isArray(data)) {
      return data?.map((item) => ({
        label: `${item.name}, ${getCountry(item.country)}`,
        value: item.name,
        lat: item.latitude,
        lon: item.longitude,
      }));
    }
    return [];
  };

  /*
   * fetch city with debounce implementation and formatting response
   * */
  const debounceFetchSuggestion = debounce((query, callback) => {
    if (query) {
      LocationService.fetchCities(query).then((options) =>
        callback(formatData(options)),
      );
    }
  }, 400);

  const fetchSuggestion = (input: string, callback: any) => {
    if (!input) {
      return callback(null, { options: [] });
    }
    return debounceFetchSuggestion(input, callback);
  };

  /*
   * saving the selected option to parent component state
   * */
  const handleChange = ({ label, lon, lat }: SuggestionType) =>
    setCoordinates({ lon, lat, name: label.split(',')[0] });

  return (
    <div className="flex gap-6 flex-wrap justify-between py-6 sm:py-8">
      <Logo />
      <div className="w-full sm:w-[500px] flex gap-4">
        <div className="flex-1">
          <CustomAsyncSelect
            placeholder="Search by a city name"
            fetchHandler={fetchSuggestion}
            handleChange={handleChange}
          />
        </div>
        <Button className="px-6" onClick={setUserLocation}>
          Clear
        </Button>
      </div>
    </div>
  );
};

export default LocationSearch;
