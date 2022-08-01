import { showMouseCoordinates } from './handler';
import { eventListener } from './listener';
import { CHANGE_EVENT, DISPLAY_ID, INPUT_ID } from '../data/constants.js';

// document
//   .getElementById('user-interface')
//   .addEventListener('mousemove', (event) => {
//     debugger;
//     // read & process user input
//     const xValue = event.pageX;
//     const yValue = event.pageY;

//     // execute core logic
//     const formattedCoordinates = 'X: ' + xValue + '\nY: ' + yValue;

//     // render result for user
//     document.getElementById('mouse-position').innerHTML = formattedCoordinates;

//     // log action for developers
//     console.log('\n--- new coordinates ---');
//     console.log('x:', xValue);
//     console.log('y:', yValue);
//   });

eventListener(DISPLAY_ID);
