
// get URI parameter from current url by default
import { MQ_LANDSCAPE} from '../config/constants';

function parameter(param, where, separator, splitter) {
    var query = where ? where : window.location.search.substring(1);
    var vars = query.split(separator ? separator : "&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split(splitter ? splitter : "=");
        if(pair[0] == param) {
            return pair[1];
        }
    }
    return false;
}

function throttle(fn, threshhold, scope) {
	threshhold || (threshhold = 250);
	var last,
		deferTimer;
	return function () {
		var context = scope || this;

		var now = +new Date,
			args = arguments;
		if (last && now < last + threshhold) {
			// hold on to it
			clearTimeout(deferTimer);
			deferTimer = setTimeout(function () {
				last = now;
				fn.apply(context, args);
			}, threshhold);
		} else {
			last = now;
			fn.apply(context, args);
		}
	};
}

function timeDifference(current, previous) {
    const msPerMinute = 60 * 1000;
    const msPerHour = msPerMinute * 60;
    const msPerDay = msPerHour * 24;
    const msPerMonth = msPerDay * 30;
    const msPerYear = msPerDay * 365;
	const elapsed = current - previous;

	let type, value;

    if (elapsed < msPerMinute) {
		type = 'seconds'
		value = Math.round(elapsed/1000)
    } else if (elapsed < msPerHour) {
		type = 'minutes'
		value = Math.round(elapsed/msPerMinute)
    } else if (elapsed < msPerDay ) {
		type = 'hours'
		value = Math.round(elapsed/msPerHour )
    } else if (elapsed < msPerMonth) {
		type = 'days'
		value = Math.round(elapsed/msPerDay)
    } else if (elapsed < msPerYear) {
		type = 'months'
		value = Math.round(elapsed/msPerMonth)
    } else {
		type = 'years'
		value = Math.round(elapsed/msPerYear)
	}

	return {
		type,
		value
	}
}

/**
 * Use with animate.css
 * See https://github.com/daneden/animate.css#usage-with-javascript
 * @param element
 * @param animationName
 * @param [callback]
 */
function animateCSS(element, animationName, callback) {
	const node = (typeof element === 'string') ? document.querySelector(element) : element;
	node.classList.add('animated', animationName);

	function handleAnimationEnd() {
		node.classList.remove('animated', animationName);
		node.removeEventListener('animationend', handleAnimationEnd);

		if (typeof callback === 'function') callback();
	}

	node.addEventListener('animationend', handleAnimationEnd);
}


/**
 *
 * @param buttonElem
 */
function enableButton(buttonElem) {
	buttonElem.removeAttribute('disabled');
}


/**
 *
 * @param buttonElem
 */
function disableButton(buttonElem) {
	buttonElem.setAttribute('disabled', 'disabled');
}



/**
 * Checks device orientation, landscape => true or portrait => false
 * @param callback
 */
function checkOrientation(callback) {
	const mediaQueryList = window.matchMedia(MQ_LANDSCAPE);

	const handleOrientationChange = (mql) => {
		typeof callback === 'function' && callback(mql.matches)
	};

	// TODO: addListener is deprecatated
	mediaQueryList.addListener(handleOrientationChange);
	handleOrientationChange(mediaQueryList)
}


export {
	throttle,
	parameter,
	timeDifference,
	animateCSS,
	enableButton,
	disableButton,
	checkOrientation,
}