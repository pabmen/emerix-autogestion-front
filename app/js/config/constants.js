import {parameter} from '../utils/utils'

export const NAME_REGEX = /^[a-zA-Z áéíóúÁÉÍÓÚñÑäëïöüÄËÏÖÜ`'".-]+$/;
export const MAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const DEBUG = ((parameter('debug') !== undefined) ? parameter('debug') : false);

// Set to true to debug analytics
export const DEBUG_METRICS = false;

export const HTML = document.querySelector('html');
export const LANG = HTML.getAttribute('lang');


export const DOM_MAIN_CONTAINER = document.querySelector('#main-container');

export const LOADING_PAGE_ID = '#loading-page';

export const MQ_LANDSCAPE = '(orientation: landscape)';
export const MQ_MOBILE = '(max-width: 480px) and (orientation: portrait), (max-width: 812px) and (orientation: landscape)';

export const METRIC_DEFAULT_CATEGORY = '';

if (process.env.NODE_ENV === 'development') {
    // TO DEVELOP ON LOCALHOST

} else {
    // PRODUCTION VALUES
}
