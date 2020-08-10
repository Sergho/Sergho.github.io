function SlideTo(index, point){
	const slider = point.parentNode.parentNode;
	const slides = slider.querySelectorAll(".slide");
	const points = slider.querySelectorAll(".point");

	slides.forEach((slide) => {
		let value = -index * 100;
		slide.style.transform = "translate(" + value + "%, 0)";
	});
	points.forEach((_point) => {
		_point.classList.remove("active");
	});
	point.classList.add("active");
}

function OpenMenu(){
	const menu = document.querySelector("#dropdown");
	const header = document.querySelector("header");
	const main = document.querySelector("main");
	const body = document.body;

	body.style.overflow = "hidden";
	menu.style.display = "block";
	setTimeout(() => {
		header.style.filter = "blur(5px);";
		main.style.filter = "blur(5px);";
		menu.style.opacity = 1;
	}, 50);
}

function CloseMenu(){
	const menu = document.querySelector("#dropdown");
	const header = document.querySelector("header");
	const main = document.querySelector("main");
	const body = document.body;

	menu.style.opacity = 0;
	header.style.filter = "none";
	main.style.filter = "none";
	setTimeout(() => {
		body.style.overflow = "visible";
		menu.style.display = "none;";
	}, 550);
}