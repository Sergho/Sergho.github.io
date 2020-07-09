let small = true

window.addEventListener("resize", () => {SliderUpdate();});

function SliderUpdate(){
	if(window.innerWidth < 768) small = true;
	else small = false;
	
	const slides = document.querySelectorAll("#blog .slider .slides .slide");
	const points = document.querySelectorAll("#blog .slider .points .point");
	let current_index;

	points.forEach((point, key) => {
		if(point.classList.contains("active")) current_index = key;
	});

	for(let i = 0; i < current_index; i++){
		if(small){
			slides[i].style.transform = "translate(-250%, 0px)";
			if(i == current_index - 1) slides[i].style.transform = "translate(-150%, 0px)";
		} else {
			slides[i].style.transform = "translate(-270%, 0px)";
			if(i == current_index - 1) slides[i].style.transform = "translate(-160%, 0px)";
		}
	}
	for(let i = current_index + 1; i < slides.length; i++){
		if(small){
			slides[i].style.transform = "translate(150%, 0px)";
			if(i == current_index + 1) slides[i].style.transform = "translate(50%, 0px)";
		} else {
			slides[i].style.transform = "translate(170%, 0px)";
			if(i == current_index + 1) slides[i].style.transform = "translate(60%, 0px)";
		}
	}
}

function SlideTo(index){
	const slides = document.querySelectorAll("#blog .slider .slides .slide");
	const points = document.querySelectorAll("#blog .slider .points .point");

	points.forEach((point, key) => {
		point.classList.remove("active");
		if(key == index) point.classList.add("active");
	});

	for(let i = 0; i < index; i++){
		if(small){
			slides[i].style.transform = "translate(-250%, 0px)";
			if(i == index - 1) slides[i].style.transform = "translate(-150%, 0px)";
		} else {
			slides[i].style.transform = "translate(-270%, 0px)";
			if(i == index - 1) slides[i].style.transform = "translate(-160%, 0px)";
		}
	}
	slides[index].style.transform = "translate(-50%, 0px)";
	for(let i = index + 1; i < slides.length; i++){
		if(small){
			slides[i].style.transform = "translate(150%, 0px)";
			if(i == index + 1) slides[i].style.transform = "translate(50%, 0px)";
		} else {
			slides[i].style.transform = "translate(170%, 0px)";
			if(i == index + 1) slides[i].style.transform = "translate(60%, 0px)";
		}
	}

}

SliderUpdate();