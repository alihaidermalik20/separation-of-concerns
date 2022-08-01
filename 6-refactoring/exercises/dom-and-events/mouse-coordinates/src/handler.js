import { DISPLAY_ID } from '../data/constants.js';
import { formatCoordinates } from './utils.js';

export const showMouseCoordinates = (event) => {
  const xValue = event.pageX;
  const yValue = event.pageY;
  document.getElementById(DISPLAY_ID).innerHTML = formatCoordinates(
    xValue,
    yValue,
  );
};
