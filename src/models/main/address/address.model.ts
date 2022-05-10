import { Country } from './country.model';
import { City } from './city.model';

export interface Address {
  id?: any;
  country: Country;
  state?: any;
  city: City;
  street: string;
  house: string;
  zipCode: string;
  longitude: string;
  latitude: string;
  fallbackString?: any;
  cityRegion?: any;
}
