function OpenMenu(){
	const menu = document.querySelector("#dropdown");
	const header = document.querySelector("header");
	const main = document.querySelector("main");
	const body = document.body;

	menu.style.display = "block";
	body.style.overflow = "hidden";
	setTimeout(() => {
		menu.style.opacity = "1";
		header.style.filter = "blur(3px)";
		main.style.filter = "blur(3px)";
	}, 50)
}
function CloseMenu(){
	const menu = document.querySelector("#dropdown");
	const header = document.querySelector("header");
	const main = document.querySelector("main");
	const body = document.body;

	menu.style.opacity = "0";
	body.style.overflow = "visible";
	header.style.filter = "none";
	main.style.filter = "none";
	setTimeout(() => {
		menu.style.display = "none";
	}, 550)
}
function PrevSlide(){
	const slides = document.querySelectorAll("#news .slider .slides .slide");
	let current_index;

	slides.forEach((slide, key) => {
		if(slide.classList.contains("current")) current_index = key;
	});
	if(current_index != 0){
		slides.forEach((slide, key) => {
			let current_value = slide.style.transform;
			current_value = current_value.split("(")[1];
			current_value = +current_value.split("%")[0];
			const new_value = current_value + 109.5;
			slide.style.transform = "translate(" + new_value + "%, 0)";
			slide.classList.remove("current");
			if(key == current_index - 1) slide.classList.add("current");
		});
	}
}
function NextSlide(){
	const slides = document.querySelectorAll("#news .slider .slides .slide");
	let current_index;

	slides.forEach((slide, key) => {
		if(slide.classList.contains("current")) current_index = key;
	});
	if(current_index != slides.length - 3){
		slides.forEach((slide, key) => {
			let current_value = slide.style.transform;
			current_value = current_value.split("(")[1];
			current_value = +current_value.split("%")[0];
			const new_value = current_value - 109.5;
			slide.style.transform = "translate(" + new_value + "%, 0)";
			slide.classList.remove("current");
			if(key == current_index + 1) slide.classList.add("current");
		});
	}
}