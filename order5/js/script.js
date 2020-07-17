function Setup(){
	if(window.innerWidth < 720) AdvCardsHide();
}

function DropdownOpen(){
	const dropdown 	= document.querySelector("#dropdown");
	const header 		= document.querySelector("header");
	const main 			= document.querySelector("main");

	dropdown.style.display = "block";
	header.style.filter = "blur(5px)";
	main.style.filter = "blur(5px)";
	document.body.style.overflow = "hidden";
	setTimeout(() => {dropdown.style.opacity = "1";}, 50);
}
function DropdownClose(){
	const dropdown 	= document.querySelector("#dropdown");
	const header 		= document.querySelector("header");
	const main 			= document.querySelector("main");

	dropdown.style.opacity = "0";
	header.style.filter = "none";
	main.style.filter = "none";
	document.body.style.overflow = "visible";
	setTimeout(() => {dropdown.style.display = "none";}, 550);
}
function AdvCardsHide(){
	const cards = document.querySelectorAll("#adv .cards .card");

	for(let i = 3; i < cards.length; i++){
		cards[i].style.display = "none";
	}
}
function AdvShowAll(button){
	const cards = document.querySelectorAll("#adv .cards .card");

	const scroll = window.pageYOffset;

	for(let i = 3; i < cards.length; i++){
		cards[i].style.display = "block";
	}

	scrollTo(0, scroll);
	button.parentNode.style.display = "none";
}
function OpenPage(index){
	const pages = document.querySelectorAll("#buy .pages .page");
	const nav_items = document.querySelectorAll("#buy .navbar .navbar-item");

	pages.forEach((page, key) => {
		if(key == index){
			page.style.display = "block";
			page.style.position = "relative";
			setTimeout(() => {page.style.opacity = "1";}, 50);
		} else {
			page.style.opacity = "0";
			page.style.display = "none";
			page.style.position = "absolute";
		}
	});

	nav_items.forEach((item, key) => {
		if(key == index){
			item.classList.add("active");
		} else {
			item.classList.remove("active");
		}
	})
}

Setup();