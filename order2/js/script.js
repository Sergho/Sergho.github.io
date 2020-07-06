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

function VideoToggleMobile(button){
	const video = button.parentNode.querySelector("video");

	if(button.classList.contains("play")){
		button.classList.remove("play");
		button.classList.add("pause");
		video.play();
		video.setAttribute("control", "");
	} else {
		button.classList.add("play");
		button.classList.remove("pause");
		video.pause();
		video.removeAttribute("control");
	}
}

function PartnersPrev(button){
	const root 	= button.parentElement;
	const items = root.querySelectorAll(".item");

	let first_index;

	items.forEach((item, key) => {
		if(item.style.transform == "translate(0%, 0px)") first_index = key;
	});
	
	if(first_index != 0){
		for(let i = first_index - 1; i < first_index + 6; i++){
			let style = items[i].style.transform;
			let pos		= +style.split("(")[1].split("%")[0];
			pos += 100;
			items[i].style.transform = "translate(" + pos + "%, 0)";
		}
	}
}

function PartnersNext(button){
	const root 	= button.parentElement;
	const items = root.querySelectorAll(".item");

	let first_index;

	items.forEach((item, key) => {
		if(item.style.transform == "translate(0%, 0px)") first_index = key;
	});
	
	if(first_index != items.length - 6){
		for(let i = first_index; i < first_index + 7; i++){
			let style = items[i].style.transform;
			let pos		= +style.split("(")[1].split("%")[0];
			pos -= 100;
			items[i].style.transform = "translate(" + pos + "%, 0)";
		}
	}
}