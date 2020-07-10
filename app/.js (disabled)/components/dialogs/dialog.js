
/**
 * 
 * @author Pablo Mendoza
 * @date 2020/07/06
 * 
 */

import { HTML } from "../../config/constants"

const DIALOG_CLASSNAME = 'dialogs'

class Dialog {
	constructor(options) {
        this.elem = options.elem
        this.content = this.elem.querySelector('.dialog-content')
		this.init()
	}

	init() {
        /*if (!HTML.classList.contains(DIALOG_CLASSNAME)) {
            window.addEventListener('click', (elem) => {
                console.log("click aca", elem)
                elem.preventDefault()
                if (elem.closest('[data-dialog-target]')) {
                    this.open(elem.getAttribute('[data-dialog-target]'))
                }
            })
        }

        // globally enable data-dialog-target triggers
        HTML.classList.add(DIALOG_CLASSNAME)*/


        this.elem.setAttribute('enabled', true)
        this.elem.querySelectorAll('.close-btn').forEach((elem) => {
            elem.addEventListener('click', () => {
                this.close()
            })
        })
    }
    
    open(id) {
        /*if (!id) {*/
            this.elem.classList.add('active')
        /*} else {
            const target = document.querySelector('[' + id + ']')

            if (target.getAttribute('enabled')) {
                target.classList.add('active')
            } else {
                console.warn('Dialog(' + id + ')::NOT_FOUND')
            }
        }*/
    }

    close() {
        this.elem.classList.remove('active')
    }

    fill(content, onSuccess) {
        this.content.HTML = content
        typeof onSuccess === 'function' && onSuccess(this.elem)
    }
}

export default Dialog;