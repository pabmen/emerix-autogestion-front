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
} from '../config/constants'

import {
    createFromTemplate, DOM_TEMPLATE_WEBVIEW,
    removeAllTemplates
} from '../utils/templates'
import Metric from '../utils/metrics'
import Slider from '../components/slider'
import Form from '../components/forms'

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
        this._createStructure()

        let activeIndex = 0;

        const slides = document.querySelectorAll('.page-login .slide-page')

        function inputErr(input) {
            input.closest('.input-wrapper').classList.add('error')
        }

        function inputValid(input) {
            input.closest('.input-wrapper').classList.remove('error')
        }
        
        const form = new Form({
            elem: document.querySelector('.page-login form'),
            onValidation: (input) => inputValid(input),
            onError: (input) => inputErr(input),
        })

        const login_slider = new Slider({
            el: document.querySelector("#login-slider"),
            slides: document.querySelectorAll("#login-slider > div"),
            createControls: false,
            animateSpeed: 150,
            initialPage: 0,
            slideCallback: (index) => activeIndex = index,
        })


        document.querySelectorAll("[data-direction=next]").forEach((elem) => {
            elem.addEventListener("click", (e) => {
                e.preventDefault()
                
                if (form.validateElements(slides[activeIndex].querySelectorAll('.input-wrapper input, select, textarea'), (input) => {
                    inputErr(input)
                })) {
                    login_slider.next()
                }
            })
        })

        document.querySelectorAll("[data-direction=back]").forEach((elem) => {
        	elem.addEventListener("click", (e) => {
        		e.preventDefault()
                login_slider.prev()
        	})
        })

        this._removeLoadingPage()
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

        const webviewNodes = createFromTemplate(DOM_TEMPLATE_WEBVIEW)
        

        // Add to main container
        DOM_MAIN_CONTAINER.appendChild(webviewNodes)

        //removeAllTemplates();
    }


    /**
     *
     * @private
     */
    _removeLoadingPage() {
        console.log('WebviewFlow::_removeLoadingPage')
        document.querySelector(LOADING_PAGE_ID).remove()
    }


    //------------------------------------------------------------------------------------------------------------------
    // ::: CALLBACKS & EVENT HANDLERS
    //------------------------------------------------------------------------------------------------------------------


}

export { WebviewFlow }
