export interface LabelValueType<T = string> {
  label: string;
  value: T;
}

export type LabelValueWithNumberType = LabelValueType<string | number>;

export type LatLonType = { lat: number; lon: number } | undefined;
export type LocationType = { lat: number; lon: number; name: string };
