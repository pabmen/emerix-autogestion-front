class Form {
    constructor(options) {
        this.elem = options.elem
        this.onError = typeof options.onError === 'function' ? options.onError : () => {}
        this.onValidation = typeof options.onValidation === 'function' ? options.onValidation : () => {}
        this.init()
    }

    init() {
        this.elem.setAttribute('novalidate', true)
        this.bindings()
    }

    bindings() {
        const elements = this.elem.querySelectorAll('textarea, input, select')

        elements.forEach((elem) => {
            elem.addEventListener('blur', () => {
                this.validateElement(elem)
            })
        })

        this.elem.onSubmit = (e) => {
            e.preventDefault()
            console.log("submit")
        }
    }

    validate() {
        
    }

    validateElement(elem) {
        let valid = true

        if (elem.required) {
        	if (elem.type === 'checkbox') {
        		if (!elem.checked) {
                    valid = false
                    this.onError(elem)
                } else {
                    this.onValidation(elem)
                }
        	} else if (elem.type === 'radio') {
                
                if (!document.querySelector('input[name="' + elem.name + '"]:checked')) {
                    valid = false
                    this.onError(document.querySelector('input[name="' + elem.name + '"]'))
                } else {
                    this.onValidation(elem)
                }
        	} else {
        		if (!elem.value) {
                    valid = false
                    this.onError(elem)
                } else {
                    this.onValidation(elem)
                }
        	}
        }

        return valid
    }

    error() {

    }
}

export default Form