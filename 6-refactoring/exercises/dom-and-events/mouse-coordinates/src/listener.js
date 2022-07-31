import { CHANGE_EVENT, INPUT_ID } from '../data/constants.js';
import { showMouseCoordinates } from './handler.js';

export const eventListener = (anything) => {
  document
    .getElementById(INPUT_ID)
    .addEventListener(CHANGE_EVENT, showMouseCoordinates(xValue, yValue));
};
