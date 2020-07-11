function OpenModal(){
	const modal = document.querySelector("#dropdown-menu");
	const header = document.querySelector("header");

	modal.style.display = "block";
	header.style.filter = "blur(5px)";
	document.body.style.overflow = "hidden";
	setTimeout(() => {
		modal.style.opacity = "1";
	}, 50);
}
function CloseModal(){
	const modal = document.querySelector("#dropdown-menu");
	const header = document.querySelector("header");

	modal.style.opacity = "0";
	header.style.filter = "none";
	document.body.style.overflow = "visible";
	setTimeout(() => {
		modal.style.display = "none";
	}, 550);
}

function NewsPrev(){
	const slides = document.querySelectorAll("#news .slider .slide");
	let current_index;

	slides.forEach((slide, key) => {
		if(slide.style.left == "1%") current_index = key;
	});

	if(current_index != 0){
		current_index--;
		for(let i = 0; i < current_index + 1; i++){
			slides[i].style.left = "-31%";
		}
		slides[current_index].style.left = "1%";
		slides[current_index + 1].style.left = "35%";
		slides[current_index + 2].style.left = "69%";
		for(let i = current_index + 3; i < slides.length; i++){
			slides[i].style.left = "101%";
		}
	}
}

function NewsNext(){
	const slides = document.querySelectorAll("#news .slider .slide");
	let current_index;

	slides.forEach((slide, key) => {
		if(slide.style.left == "1%") current_index = key;
	});

	if(current_index != slides.length - 3){
		current_index++;
		for(let i = 0; i < current_index; i++){
			slides[i].style.left = "-31%";
		}
		slides[current_index].style.left = "1%";
		slides[current_index + 1].style.left = "35%";
		slides[current_index + 2].style.left = "69%";
		for(let i = current_index + 3; i < slides.length; i++){
			slides[i].style.left = "101%";
		}
	}
}

function PartnersPrev(){
	const slides = document.querySelectorAll("#partners .slider .slide");
	let current_index;

	slides.forEach((slide, key) => {
		if(slide.style.transform == "translate(0%, 0px)") current_index = key;
	});

	if(current_index != 0){
		current_index--;
		for(let i = 0; i < current_index + 1; i++){
			slides[i].style.transform = "translate(-100%, 0)";
		}
		slides[current_index].style.transform = "translate(0%, 0)";
		slides[current_index + 1].style.transform = "translate(100%, 0)";
		slides[current_index + 2].style.transform = "translate(200%, 0)";
		slides[current_index + 3].style.transform = "translate(300%, 0)";
		slides[current_index + 4].style.transform = "translate(400%, 0)";
		for(let i = current_index + 5; i < slides.length; i++){
			slides[i].style.transform = "translate(500%, 0)";
		}
	}
}

function PartnersNext(){
	const slides = document.querySelectorAll("#partners .slider .slide");
	let current_index;

	slides.forEach((slide, key) => {
		if(slide.style.transform == "translate(0%, 0px)") current_index = key;
	});

	if(current_index != slides.length - 5){
		current_index++;
		for(let i = 0; i < current_index; i++){
			slides[i].style.transform = "translate(-100%, 0)";
		}
		slides[current_index].style.transform = "translate(0%, 0)";
		slides[current_index + 1].style.transform = "translate(100%, 0)";
		slides[current_index + 2].style.transform = "translate(200%, 0)";
		slides[current_index + 3].style.transform = "translate(300%, 0)";
		slides[current_index + 4].style.transform = "translate(400%, 0)";
		for(let i = current_index + 5; i < slides.length; i++){
			slides[i].style.transform = "translate(500%, 0)";
		}
	}
}