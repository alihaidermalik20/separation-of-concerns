// import { showMouseCoordinates } from './handler';
import { eventListener } from './listener.js';
import { INPUT_ID } from '../data/constants.js';

// document.getElementById(INPUT_ID).addEventListener(CHANGE_EVENT, (event) => {
//   debugger;
//   // read & process user input
//   const xValue = event.pageX;
//   const yValue = event.pageY;

//   // execute core logic
//   const formattedCoordinates = 'X: ' + xValue + '\nY: ' + yValue;

//   // render result for user
//   document.getElementById(DISPLAY_ID).innerHTML = formattedCoordinates;

//   // log action for developers
//   console.log('\n--- new coordinates ---');
//   console.log('x:', xValue);
//   console.log('y:', yValue);
// });

eventListener(INPUT_ID);
