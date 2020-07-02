/**
 * 
 * @author Pablo Mendoza
 * @date 2019
 * 
 */

import './slider.css';

class Slider {
	constructor(options) {
		this.DOM_slider = options.el;
		this.DOM_slides = options.slides || this.DOM_slider.querySelectorAll(":scope > li");
		this.DOM_parent = null;

		this.DOM_arrows = null;
		this.DOM_meatballs = null;
		this.DOM_meatballsLis = null;

		this.slideCallback = options.slideCallback || function () {};

		//this.touchStart = [0, 0];
		this.index = 0;
		this.createControls = typeof options.createControls !== "undefined" ? options.createControls : true;
		this.initialPage = options.initialPage || 0;
		this.animate = typeof options.animate !== "undefined" ? options.animate : true;
		this.animateSpeed = typeof options.animateSpeed !== "undefined" ? options.animateSpeed : 500;

		this.init();
	}

	slideTo(index) {
		this.DOM_slider.style["transform"] = "translateX(-" + (100 / this.DOM_slides.length * index) + "%)";
		//this.DOM_slider.style["margin-left"] = "-" + (index * 100) + "%";
		this.index = index;
		this.slideCallback(index);
		this.updateControls();
	}

	next() {
		(this.index + 1 < this.DOM_slides.length) ? this.slideTo(this.index + 1): '';
	}

	prev() {
		(this.index - 1 >= 0) ? this.slideTo(this.index - 1): '';
	}

	createStructure() {
		const wrapper = document.createElement('div');
		const meatballs = document.createElement('div');
		const arrows = document.createElement('div');
        let strMeatballs = "";
        let strArrows = "";
        
        wrapper.className = "slider-container";
        
        if (this.createControls) {
            
            meatballs.className = "slider-controller";
            arrows.className = "slider-arrows";

            strArrows += "<a href='#' class='prev-slide'>Previous slide</a><a href='#' class='next-slide'>Next slide</a>";
            arrows.innerHTML = strArrows;
    
            strMeatballs += "<ul>";
            for (var i = 0; i < this.DOM_slides.length; i++) {
                strMeatballs += "<li class='meatball'><a href='javascript:void(0)' title='Slide nº" + (i + 1) + "'>" + (i + 1) + "</a></li>";
            }
            strMeatballs += "</ul>";
            meatballs.innerHTML = strMeatballs;
    
            this.DOM_arrows = arrows;
            this.DOM_meatballs = meatballs;
        }
		this.DOM_slider.parentElement.insertBefore(wrapper, this.DOM_slider);

        wrapper.appendChild(this.DOM_slider);
        
        if (this.createControls) {
            wrapper.appendChild(arrows);
            wrapper.appendChild(meatballs);

            this.DOM_meatballsLis = this.DOM_meatballs.querySelectorAll(".meatball");
        }

		this.DOM_parent = this.DOM_slider.parentElement;
	}

	bindings() {
        if (this.createControls) {
            [...this.DOM_meatballsLis].map((meatball, index) => {
                meatball.addEventListener("click", (e) => {
                    e.preventDefault();
                    this.slideTo(index);
                }, false);
            });
    
            this.DOM_arrows.querySelector(".prev-slide").addEventListener("click", (e) => {
                e.preventDefault();
                this.prev();
            }, false);
    
            this.DOM_arrows.querySelector(".next-slide").addEventListener("click", (e) => {
                e.preventDefault();
                this.next();
            }, false);
        }
	}

	updateControls() {
		this.DOM_parent.setAttribute("data-index", this.index);

		if (this.index === 0) {
			this.DOM_parent.setAttribute("data-status", "position(first)");
		} else if (this.index === this.DOM_slides.length - 1) {
			this.DOM_parent.setAttribute("data-status", "position(last)");
		} else {
			this.DOM_parent.setAttribute("data-status", "position(" + (this.index + 1) + ")");
		}

        if (this.createControls) {
            [...this.DOM_meatballsLis].map((li, index) => {
                if (index === this.index) {
                    li.classList.add("active");
                } else {
                    li.classList.remove("active");
                }
            });
        }
	}

	init() {
		this.DOM_slider.style["width"] = (100 * this.DOM_slides.length) + "%";

		for (var i = 0; i < this.DOM_slides.length; i++) {
			this.DOM_slides[i].style["width"] = (100 / this.DOM_slides.length).toFixed(2) + "%";
		}

		this.createStructure();
		this.bindings();
		this.slideTo(this.initialPage);

		this.DOM_slider.setAttribute("data-enabled", true);

		if (this.animate) {
			this.DOM_slider.classList.add("slider", "animated");
			this.DOM_slider.style["transition"] = `transform ${this.animateSpeed}ms ease-in-out 0s`;
		} else {
			this.DOM_slider.classList.add("slider");
		}
	}
}

export default Slider;