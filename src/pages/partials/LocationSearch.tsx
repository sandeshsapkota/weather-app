import { getCountry } from 'iso-3166-1-alpha-2';
import LocationService from '@/services/location.service';
import CustomAsyncSelect from '@/components/async-select';

import { CityType } from '@/@types/weather';
import { LocationType, LatLonType } from '@/@types/common';
import Logo from '@/components/logo';
import { Button } from '@/components';

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

  const fetchSuggestions = async (
    query: string,
  ): Promise<SuggestionType[] | []> => {
    if (!query) {
      return [];
    }
    return LocationService.fetchCities(query).then((res) =>
      formatData(res as CityType[]),
    );
  };

  /*
   * saving the selected option to parent component state
   * */
  const handleChange = ({ label, lon, lat }: SuggestionType) =>
    setCoordinates({ lon, lat, name: label.split(',')[0] });

  /*
   * handle selection clear
   * */
  const handleClear = () => setUserLocation();

  return (
    <div className="grid gap-6 sm:grid-cols-3 py-6 sm:py-8">
      <Logo />
      <div className="sm:col-span-2 flex gap-4">
        <div className="flex-1">
          <CustomAsyncSelect
            placeholder="Search by a city name"
            fetchHandler={fetchSuggestions}
            handleChange={handleChange}
          />
        </div>
        <Button className="px-6" onClick={handleClear}>
          Clear
        </Button>
      </div>
    </div>
  );
};

export default LocationSearch;