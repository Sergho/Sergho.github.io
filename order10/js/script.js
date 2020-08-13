function PrevSlide(button){
	const slider = button.parentNode;
	const slides = slider.querySelectorAll(".slide");
}
function NextSlide(button){
	const slider = button.parentNode;
	const slides = slider.querySelectorAll(".slide");
	const active = slider.querySelector("active");
	let active_index = 0;

	slides.forEach((slide, key) => {
		if(slide == active) active_index = key;
	});
	if(active_index < slides.length){
		slides.forEach((slide) => {
			let value = slide.style.transform.split("(")[1].split("%")[0];
			console.log(value);
		})
	}
}