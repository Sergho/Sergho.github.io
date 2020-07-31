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