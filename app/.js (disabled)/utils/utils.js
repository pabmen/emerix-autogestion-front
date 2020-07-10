
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
	checkOrientation,
}