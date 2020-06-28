/**
 * Main
 * @author Pablo Mendoza
 * @date 2020-06-23
 */

import {
    DEBUG,
    HTML, LANG,
} from './config/constants';
import isMobile from 'ismobilejs';
import { WebviewFlow } from './managers/WebviewFlow';


HTML.classList.remove('no-js');

// If the site has the debug query parameter, it will enable some debug tools.
// Example: www.xxxx.com/?debug=1
DEBUG && HTML.classList.add('debug', `debug-${ DEBUG }`);


// GLOBAL ERROR HANDLING
// todo
/*
window.addEventListener('error', function (e) {
	console.error('GLOBAL HANDLER. Error occurred: ' + e.error.message);
	return false;
});
 */

// You can also catch all the errors fired inside a promise callback (.then()) listening for unhandledrejection event
// @see https://developer.mozilla.org/en-US/docs/Web/API/Window/unhandledrejection_event
window.addEventListener('unhandledrejection', function(e) {
    console.warn('Unhandled promise rejection (promise: ', e.promise, '\n, reason: ', e.reason, ').');

    // HERE CODE TO HANDLE ERROR

    // Prevent the default handling (such as outputting the error to the console)
    //e.preventDefault();
});

console.warn(navigator.userAgent);
console.warn('lang', LANG);

let flowController;

// load desktop / mobile frontend
if(isMobile.any) {
    HTML.classList.add('mobile');
    HTML.classList.add((isMobile.apple.phone) ? 'ios' : 'android');
} else {
    HTML.classList.add('desktop');
}

flowController = new WebviewFlow();