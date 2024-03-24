import { useEffect, useState } from 'react';
import { LocationType } from '@/@types/common';

const useLocationData = () => {
  const [location, setLocation] = useState<LocationType | undefined>(undefined);
  const [defaultLocation, setDefaultLocation] = useState<
    LocationType | undefined
  >(undefined);

  const handleUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const userLocation = {
            lon: position.coords.longitude,
            lat: position.coords.latitude,
            name: '',
          };
          console.log('user accepted location.');
          setLocation(userLocation);
          setDefaultLocation(userLocation);
        },
        () => {
          console.log('User denied  location.');
        },
      );
    } else {
      console.log('Geolocation is not supported by this browser.');
    }
  };

  const setUserLocation = () => setLocation(defaultLocation);

  useEffect(() => {
    /*
     * initially asking user to allow location
     * */
    handleUserLocation();
  }, []);

  return { location, setLocation, setUserLocation };
};
export default useLocationData;
