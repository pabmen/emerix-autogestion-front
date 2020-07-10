import {
	DEBUG_METRICS
} from '../config/constants';

const DEFAULT_CATEGORY = 'Landing Aves INCUCAI 2020';


class Metric {
	constructor() {
		
	}

	static trigger(category, action, label, value) {
		if (!window.gtag || typeof window.gtag !== 'function') {
			console.error('GTAG not loaded!');
			
		} else {
			window.gtag('event', action, {
				'event_category': category || DEFAULT_CATEGORY,
				'event_label': label,
				'value': value
			});
			DEBUG_METRICS && console.log({action,'event_category': category || DEFAULT_CATEGORY,'event_label': label,value});
		}
	}

	static triggerOnce(values, dom_target) {
		if (dom_target.dataset.metricTriggered !== 'true') {
			Metric.trigger(values.category, values.action, values.label, values.value);
			dom_target.dataset.metricTriggered = 'true'
		}
	}
}

export default Metric;