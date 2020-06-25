/**
 * WebviewFlow class
 * @author Pablo Mendoza
 * @date 2020-01-13
 */

import {
    HTML,
    LOADING_PAGE_ID,
    DOM_MAIN_CONTAINER, METRIC_DEFAULT_CATEGORY,
    VIDEO_DATA
} from '../config/constants';

import {
    createFromTemplate, DOM_TEMPLATE_WEBVIEW,
    removeAllTemplates
} from '../utils/templates';
import Metric from '../utils/metrics';

//------------------------------------------------------------------------------------------------------------------
// ::: CONSTANTS
//------------------------------------------------------------------------------------------------------------------



//------------------------------------------------------------------------------------------------------------------
// ::: CLASS
//------------------------------------------------------------------------------------------------------------------


class WebviewFlow {

    /**
     *
     */
    constructor() {
        console.log('WebviewFlow::constructor');

        //------------------------------------------------------------------------------------------------------------------
        // ::: PUBLIC PROPERTIES
        //------------------------------------------------------------------------------------------------------------------


        //------------------------------------------------------------------------------------------------------------------
        // ::: PRIVATE PROPERTIES
        //------------------------------------------------------------------------------------------------------------------



        //------------------------------------------------------------------------------------------------------------------
        // ::: INIT
        //------------------------------------------------------------------------------------------------------------------


        // Create Webview
        this._createStructure();
        this._removeLoadingPage();
    }


    //------------------------------------------------------------------------------------------------------------------
    // ::: PRIVATE METHODS
    //------------------------------------------------------------------------------------------------------------------


    /**
     * Create structure with minimal video tutorials on Instagram webView
     * @private
     */
    _createStructure() {
        console.log('WebviewFlow::_createStructure');

        const webviewNodes = createFromTemplate(DOM_TEMPLATE_WEBVIEW);

        // Add to main container
        DOM_MAIN_CONTAINER.appendChild(webviewNodes);

        removeAllTemplates();
    }


    /**
     *
     * @private
     */
    _removeLoadingPage() {
        console.log('WebviewFlow::_removeLoadingPage');
        document.querySelector(LOADING_PAGE_ID).remove();
    }


    //------------------------------------------------------------------------------------------------------------------
    // ::: CALLBACKS & EVENT HANDLERS
    //------------------------------------------------------------------------------------------------------------------


}

export { WebviewFlow };
