/**
 * Template
 * @author Pablo Mendoza
 * @date 2020-01-30
 */


const DOM_TEMPLATE_WEBVIEW = document.querySelector('#template-webview');


/**
 *
 * @param template
 * @returns {*}
 */
function createFromTemplate(template) {
	//console.log('createFromTemplate', template);
	return document.importNode(template.content, true);
}


/**
 * Remove templates to clean the html
 */
function removeAllTemplates() {
	const templates = [
		DOM_TEMPLATE_WEBVIEW,
	];

	templates.forEach((elem) => {
		elem.parentNode.removeChild(elem);
	});
}


export {
	DOM_TEMPLATE_WEBVIEW,

	createFromTemplate,
	removeAllTemplates,
}