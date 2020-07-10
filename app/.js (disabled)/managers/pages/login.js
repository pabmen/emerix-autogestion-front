

/**
 * Login Page class
 * @author Pablo Mendoza
 * @date 2020-07-02
 */

import {
	HTML,
} from '../../config/constants'

import Metric from '../../utils/metrics'
import Slider from '../../components/slider'
import Form from '../../components/forms'
import Dialog from '../../components/dialogs'

//------------------------------------------------------------------------------------------------------------------
// ::: CONSTANTS
//------------------------------------------------------------------------------------------------------------------



//------------------------------------------------------------------------------------------------------------------
// ::: CLASS
//------------------------------------------------------------------------------------------------------------------

class LoginPage {

	/**
	 *
	 */
	constructor() {
		console.log('LoginPage::constructor');

		//------------------------------------------------------------------------------------------------------------------
		// ::: PUBLIC PROPERTIES
		//------------------------------------------------------------------------------------------------------------------


		//------------------------------------------------------------------------------------------------------------------
		// ::: PRIVATE PROPERTIES
		//------------------------------------------------------------------------------------------------------------------



		//------------------------------------------------------------------------------------------------------------------
		// ::: INIT
		//------------------------------------------------------------------------------------------------------------------


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
		
		document.querySelectorAll('[data-dialog-target]').forEach((elem) => {
			const thisDialog = new Dialog({
				elem: document.querySelector('#' + elem.getAttribute('data-dialog-target'))
			})

			elem.addEventListener('click', () => {
				thisDialog.open()
			})
		})
		
		document.querySelectorAll("[data-direction=next]").forEach((elem) => {
			elem.addEventListener("click", (e) => {
				const elements = slides[activeIndex].querySelectorAll('.input-wrapper input, select, textarea')
				let ready = true

				e.preventDefault()

				elements.forEach((input) => {
					if (!form.validateElement(input)) {
						ready = false
					}
				})

                if (ready) {
                    if (activeIndex === 2) {
                        location.href = location.href + '?page=home' //TODO temporal
                    } else {
                        login_slider.next() // check if page validated then go to next page
                    }
                } 
                
			})
		})

		document.querySelectorAll("[data-direction=back]").forEach((elem) => {
			elem.addEventListener("click", (e) => {
				e.preventDefault()
				login_slider.prev()
			})
        })

	}


	//------------------------------------------------------------------------------------------------------------------
	// ::: PRIVATE METHODS
	//------------------------------------------------------------------------------------------------------------------


	//------------------------------------------------------------------------------------------------------------------
	// ::: CALLBACKS & EVENT HANDLERS
	//------------------------------------------------------------------------------------------------------------------


}

export default LoginPage