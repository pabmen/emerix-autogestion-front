/**
 * 
 * @author Pablo Mendoza
 * @date 2020/07/05
 * 
 */

class Sidebar {
	constructor(options) {
        this.elem = options.elem;
        this.container = this.elem.parentNode;
        this.init()
    }

    init() {
        this.elem.querySelector('.close-btn').addEventListener('click', () => {
            this.close()
        })
    }

    open() {
        this.container.classList.add('active')
    }

    close() {
        this.container.classList.remove('active')
    }

    fill(data) {
        console.log("Fill with: " + data)
    }

}

export default Sidebar;