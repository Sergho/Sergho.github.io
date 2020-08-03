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
function OpenForm(){
	const menu = document.querySelector("#form");
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
function CloseForm(){
	const menu = document.querySelector("#form");
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