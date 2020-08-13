function PrevSlide(button){
	const slider = button.parentNode;
	const slides = slider.querySelectorAll(".slide");
	const active = slider.querySelector(".active");
	let active_index = 0;

	slides.forEach((slide, key) => {
		if(slide == active) active_index = key;
	});
	if(active_index != 0){
		slides.forEach((slide, key) => {
			let x_t = +slide.style.transform.split("translate(")[1].split("%")[0];
			x_t += 100;
			slide.style.transform = "translate(" + x_t + "%, 0%)";
			slide.style.zIndex = "0";

			slide.classList.remove("active");
			if(key == active_index - 1){
				slide.classList.add("active");
				if(window.innerWidth >= 768){
					slide.style.zIndex = 3;
					let x_t = +slide.style.transform.split("translate(")[1].split("%")[0];
					slide.style.transform = "scale(1, 1.1) translate(" + x_t + "%, 0%)";
				}
			}

			if(key != active_index - 1 && key != active_index - 2 && key != active_index){
				slide.style.opacity = "0";
			} else {
				slide.style.opacity = "1";
			}
		})
	}
}
function NextSlide(button){
	const slider = button.parentNode;
	const slides = slider.querySelectorAll(".slide");
	const active = slider.querySelector(".active");
	let active_index = 0;

	slides.forEach((slide, key) => {
		if(slide == active) active_index = key;
	});
	if(active_index != 4){
		slides.forEach((slide, key) => {
			let x_t = slide.style.transform.split("translate(")[1].split("%")[0];
			x_t -= 100;
			slide.style.transform = "translate(" + x_t + "%, 0%)";

			slide.classList.remove("active");
			if(key == active_index + 1){
				slide.classList.add("active");
				if(window.innerWidth >= 768){
					slide.style.zIndex = 3;
					let x_t = slide.style.transform.split("translate(")[1].split("%")[0];
					slide.style.transform = "scale(1, 1.1) translate(" + x_t + "%, 0%)";
				}
			}

			if(key != active_index + 1 && key != active_index + 2 && key != active_index){
				slide.style.opacity = "0";
			} else {
				slide.style.opacity = "1";
			}
		})
	}
}

function OpenMenu(){
	const menu = document.querySelector("#dropdown");
	const header = document.querySelector("header");
	const main = document.querySelector("main");
	const body = document.body;

	menu.style.display = "block";
	body.style.overflow = "hidden";
	setTimeout(() => {
		header.style.filter = "blur(5px)";
		main.style.filter = "blur(5px)";
		menu.style.opacity = "1";
	}, 50);
}
function CloseMenu(){
	const menu = document.querySelector("#dropdown");
	const header = document.querySelector("header");
	const main = document.querySelector("main");
	const body = document.body;

	menu.style.opacity = "0";
	header.style.filter = "none";
	main.style.filter = "none";
	setTimeout(() => {
		menu.style.display = "none";
		body.style.overflow = "visible";
	}, 550);
}

function Setup(){
	const active_slides = document.querySelectorAll(".slide.active");
	const slides = document.querySelectorAll(".slide");
	if(window.innerWidth < 768){
		slides.forEach((slide) => {
			slide.style.transform = "translate(-100%, 0%)";
		})
	}
	if(window.innerWidth >= 768){
		active_slides.forEach((slide) => {
			slide.style.zIndex = 3;
			let x_t = slide.style.transform.split("translate(")[1].split("%")[0];
			slide.style.transform = "scale(1, 1.1) translate(" + x_t + "%, 0%)";
		})
	}
}

Setup();