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

import { parameter } from '../utils/utils'

import Navigation from '../components/navigation'

import LoginPage from './pages/login'
import HomePage from './pages/home'
import InvoicePage from './pages/invoice'

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

        this._checkPage()

        this._removeLoadingPage()
    }


    //------------------------------------------------------------------------------------------------------------------
    // ::: PRIVATE METHODS
    //------------------------------------------------------------------------------------------------------------------

     //TODO this is temporal
    _checkPage() {

        //TODO everything is temporal
        const pageParam = parameter('page')
        const mainNav = document.querySelector('.main-navigation')
        const mainNavItems = mainNav.querySelectorAll('.navigation-item')
        const topbar = document.querySelector('.topbar')
        
        const pageLogin = document.querySelector('.page-login')
        const pageHome = document.querySelector('.page-home')
        const pageInvoice = document.querySelector('.page-invoice')
        
        //TODO everything is temporal
        new Navigation({
            elem: mainNav,
        	items: mainNavItems,
        	onSelect: (selectedItem) => {
                mainNavItems.forEach((item) => {
                    item === selectedItem ? item.classList.add('active') : item.classList.remove('active')
        		})
        	}
        })
        
        /*if (pageParam === 'login') {
            
            
        //TODO everything is temporal
        } else */if (pageParam === 'home') {
            pageLogin.style.display = 'none'
            pageInvoice.style.display = 'none'
            mainNavItems[0].classList.add('active')
            new HomePage();
            
        //TODO everything is temporal
        } else if (pageParam === 'invoice') {
            pageHome.style.display = 'none'
            pageLogin.style.display = 'none'
            mainNavItems[2].classList.add('active')
            new InvoicePage();
            
        //TODO everything is temporal
        } else {
            pageHome.style.display = 'none'
            pageInvoice.style.display = 'none'
            mainNav.style.display = 'none'
            topbar.style.display = 'none'
            new LoginPage()
            
        }
        
    }
    
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
