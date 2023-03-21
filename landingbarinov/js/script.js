document.addEventListener("DOMContentLoaded", function() {
	// MAIN-SLIDER
	const sliders_main = document.querySelectorAll(".js-main-slider");
	sliders_main.forEach((slider) => {
		const slides = slider.querySelectorAll('.js-slide');
		const dots = slider.querySelectorAll('.js-slider-dot');
		const slides_count = slides.length;
		let active_index;
		let btn_disabled = false;
		slides.forEach((slide, key) => {
			if(slide.classList.contains('active')){
				active_index = key;
			}
		})
		render();
		anim_on();

		setInterval(() => {
			if(!btn_disabled) next();
		}, 5000);

		function clear_class(elem){
			elem.classList.remove("active");
			elem.classList.remove("left");
			elem.classList.remove("right");
		}

		function next(){
			active_index++;
			if(active_index >= slides_count) active_index -= slides_count;
			render();
			btn_disabled = true;
			setTimeout(() => {btn_disabled = false}, 500);
			dots_activate();
		}

		function prev(){
			active_index--;
			if(active_index < 0) active_index += slides_count;
			render();
			btn_disabled = true;
			setTimeout(() => {btn_disabled = false}, 500);
			dots_activate();
		}

		function slide_to(index){
			active_index = index;
			if(active_index < 0) active_index += slides_count;
			render();
			btn_disabled = true;
			setTimeout(() => {btn_disabled = false}, 500);
			dots_activate();
		}

		function render(){
			let left = true;
			slides.forEach((slide, key) => {
			if(key == active_index){
				clear_class(slide);
				slide.classList.add("active");
				left = false;
			}
			else {
				if(left){
					clear_class(slide);
					slide.classList.add("left");
				} else {
					clear_class(slide);
					slide.classList.add("right");
				}
			}
			if(active_index == 0){
				clear_class(slides[slides_count - 1]);
				slides[slides_count - 1].classList.add("left");
			}
			if(active_index == slides_count - 1){
				clear_class(slides[0]);
				slides[0].classList.add("right");
			}
			});
		}

		function anim_on(){
			setTimeout(() => {
				slides.forEach((slide) => {
					slide.style.transition = ".5s ease";
				});
			}, 15);
		};

		function anim_off(){
			slides.forEach((slide) => {
				slide.style.transition = "none";
			})
		}

		function dots_activate(){
			dots.forEach((dot, key) => {
				if(key != active_index) dot.classList.remove("active");
				else dot.classList.add("active");
			})
		}

		const prev_btn = slider.querySelector(".js-prev");
		const next_btn = slider.querySelector(".js-next");
		prev_btn.addEventListener("click", () => {
			if(!btn_disabled) prev();
		});
		next_btn.addEventListener("click", () => {
			if(!btn_disabled) next();
		});
		dots.forEach((dot, key) => {
			dot.addEventListener("click", () => {
				if(!btn_disabled) slide_to(Array.from(dots).indexOf(dot));
			})
		})
	});

	// NEWS
	const news = document.querySelectorAll(".js-news");
	news.forEach((news_item) => {
		const button = news_item.querySelector(".js-news-button");
		button.addEventListener("click", () => {
			if(news_item.classList.contains("active")){
				close_all();
			}
			else {
				close_all();
				news_item.classList.toggle("active");
			}
		});
		function close_all(){
			news.forEach((news_item) => {
				news_item.classList.remove("active");
			})
		}
	});

	// SLIDER
	const sliders = document.querySelectorAll(".js-slider");
	const single_render = document.body.clientWidth < 768;
	sliders.forEach((slider) => {
		const row = slider.querySelector(".js-slider-row");
		const slides = slider.querySelectorAll(".js-slide");
		const slides_count = slides.length;
		const dots = slider.querySelectorAll(".js-slider-dot");
		const prev_btn = slider.querySelector(".js-slider-prev");
		const next_btn = slider.querySelector(".js-slider-next");
		let active_slides = [];
		let prev_disabled = true;
		let next_disabled = false;
		if(single_render){
			let skip = false;
			slides.forEach((slide) => {
				if(slide.classList.contains("active") && !skip){
					active_slides[0] = slide;
					skip = true;
				}
			});
		} else {
			slides.forEach((slide) => {
				if(slide.classList.contains("active")){
					active_slides.push(slide);
				}
			});
		}
		render();

		function render(){
			let offset_count = Array.from(slides).indexOf(active_slides[0]);
			if(single_render){
				row.style.transform = "translate(-" + 111.11 * offset_count + "%, 0)";
			} else {
				row.style.transform = "translate(-" + 33 * offset_count + "%, 0)";
			}
			if(prev_disabled) prev_btn.classList.add("disabled");
			else prev_btn.classList.remove("disabled");
			if(next_disabled) next_btn.classList.add("disabled");
			else next_btn.classList.remove("disabled");
			dots_activate();
		}

		function prev(){
			if(!prev_disabled){
				if(single_render){
					active_slides.push(slides[Array.from(slides).indexOf(active_slides.pop()) - 1]);
					next_disabled = Array.from(slides).indexOf(active_slides[0]) >= slides_count - 1;
					prev_disabled = Array.from(slides).indexOf(active_slides[0]) <= 0;
				} else {
					active_slides.pop();
					active_slides.unshift(slides[Array.from(slides).indexOf(active_slides[0]) - 1]);
					next_disabled = Array.from(slides).indexOf(active_slides[2]) >= slides_count - 1;
					prev_disabled = Array.from(slides).indexOf(active_slides[0]) <= 0;
				}
				render();
			}
		}

		function next(){
			if(!next_disabled){
				if(single_render){
					active_slides.push(slides[Array.from(slides).indexOf(active_slides.pop()) + 1]);
					next_disabled = Array.from(slides).indexOf(active_slides[0]) >= slides_count - 1;
					prev_disabled = Array.from(slides).indexOf(active_slides[0]) <= 0;
				} else {
					active_slides.shift();
					active_slides.push(slides[Array.from(slides).indexOf(active_slides[1]) + 1]);
					next_disabled = Array.from(slides).indexOf(active_slides[2]) >= slides_count - 1;
					prev_disabled = Array.from(slides).indexOf(active_slides[0]) <= 0;
				}
				render();
			}
		}

		function slide_to(index){
			if(single_render){
				active_slides[0] = slides[index];
				next_disabled = Array.from(slides).indexOf(active_slides[0]) >= slides_count - 1;
				prev_disabled = Array.from(slides).indexOf(active_slides[0]) <= 0;
			} else {
				if(index <= 0) index++;
				if(index >= slides_count - 1) index--;
				index--;
				active_slides[0] = slides[index];
				active_slides[1] = slides[index + 1];
				active_slides[2] = slides[index + 2];
			}
			render();
		}

		function dots_activate(index){
			dots.forEach((dot) => {
				dot.classList.remove("active");
			})
			active_slides.forEach((slide) => {
				dots[Array.from(slides).indexOf(slide)].classList.add("active");
			})
		}

		dots.forEach((dot, key) => {
			dot.addEventListener("click", () => {
				slide_to(key);
			})
		});
		prev_btn.addEventListener("click", () => {
			prev();
		});

		next_btn.addEventListener("click", () => {
			next();
		})
	})
});