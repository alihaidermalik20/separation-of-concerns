import { CHANGE_EVENT, INPUT_ID } from '../data/constants.js';
import { showMouseCoordinates } from './handler.js';

export const eventListener = (id = '') => {
  document
    .getElementById(id)
    .addEventListener(CHANGE_EVENT, showMouseCoordinates);
};
