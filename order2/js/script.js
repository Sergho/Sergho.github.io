function DropdownOpen(){
	const dropdown 	= document.querySelector("#dropdown");
	const header 		= document.querySelector("header");

	dropdown.style.display = "block";
	setTimeout(() => {dropdown.style.opacity = "1"}, 50);
	document.body.style.overflow = "hidden";
	header.style.filter = "blur(3px)";
}

function DropdownClose(){
	const dropdown 	= document.querySelector("#dropdown");
	const header 		= document.querySelector("header");

	dropdown.style.opacity = "0";
	document.body.style.overflow = "visible";
	header.style.filter = "none";
	setTimeout(() => {dropdown.style.display = "none"}, 550)
}