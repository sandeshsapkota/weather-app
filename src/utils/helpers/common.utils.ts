import dayjs from 'dayjs';
import { weekdays } from '@/utils/constants/common';

/**
 * Generates an array of incremental numbers from 1 to the limit.
 * @param limit - The upper limit of the array.
 * @returns an array of incremental numbers.
 */
const generateIncrementalArray = (limit: number): number[] => {
  return Array.from({ length: limit }, (_, index) => index + 1);
};

/**
 * Adds comma to the number
 * @param number
 * @returns number with comma added
 */
const addCommasToNumber = (number: number) => {
  if (Number.isNaN(number)) {
    console.error('Input is not a valid number');
    return '';
  }
  return number.toLocaleString();
};

/**
 * Finds and returns the day of the week for the given date.
 *
 * @param {string} date - The date for which to find the day of the week.
 * @return {string} The day of the week corresponding to the input date.
 */

const findDay = (date: string) => {
  return weekdays[dayjs(date).day()];
};

export { generateIncrementalArray, addCommasToNumber, findDay };
