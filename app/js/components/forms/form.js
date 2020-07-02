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
                !elem.value ? this.onError(elem) : this.onValidation(elem)
            })
        })

        this.elem.onSubmit = (e) => {
            e.preventDefault()
            console.log("submit")
        }
    }

    validate() {
        
    }

    validateElements(elems, onError) {
        let allValid = true

        elems.forEach((elem) => {
            if (!elem.value) {
                typeof onError === 'function' && onError(elem)
                allValid = false
            }
        })

        return allValid
    }

    error() {

    }
}

export default Form