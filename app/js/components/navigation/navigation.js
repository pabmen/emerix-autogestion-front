/**
 * 
 * @author Pablo Mendoza
 * @date 2020/07/05
 * 
 */

class Sidebar {
	constructor(options) {
        this.elem = options.elem
        this.items = this.elem.querySelectorAll('.navigation-item')
		this.init()
	}

	init() {

	}

	setActive(index) {
        this.items.forEach((item, itemIndex) => {
            itemIndex === index ? item.classList.add('active') : item.classList.remove('active')
        })
    }
}

export default Sidebar;