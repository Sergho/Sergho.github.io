function Setup(){
	NewsStart();
}

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

function VideoPlayMobile(button){
	const video = button.parentNode.querySelector("video");

	button.style.opacity = "0";
	video.play();
	setTimeout(() => {button.style.display = "none";}, 550);
}

function VideoPauseMobile(video){
	const button = video.parentNode.querySelector(".play");

	button.style.display = "block";
	video.pause();
	setTimeout(() => {button.style.opacity = "1";}, 50);
}

function VideoPrev(){
	const numbers = document.querySelectorAll("main .projects .videos-desktop .control .list .item");
	const videos 	= document.querySelectorAll("main .projects .videos-desktop .other-videos .other-video");
	const main_video = document.querySelector("main .projects .videos-desktop .main-video video");

	let current_index;
	numbers.forEach((number, key) => {
		if(number.classList.contains("active")){
			current_index = key;
		}
	});

	if(current_index != 0){
		videos.forEach((video) => {
			const style = video.style.transform;
			let pos 		= +style.split(", ")[1].split("%")[0];
			pos += 120;
			video.style.transform = "translate(0, " + pos + "%)";
		});

		numbers.forEach((number) => {
			number.classList.remove("active");
		});

		current_index--;
		numbers[current_index].classList.add("active");

		main_video.style.width = main_video.offsetWidth + "px";

		const newurl = videos[current_index].querySelector("video").getAttribute("src");
		main_video.setAttribute("src", newurl);
		setTimeout(() => {main_video.style.width = "auto"}, 3000);
	}
}

function VideoNext(){
	const numbers = document.querySelectorAll("main .projects .videos-desktop .control .list .item");
	const videos 	= document.querySelectorAll("main .projects .videos-desktop .other-videos .other-video");
	const main_video = document.querySelector("main .projects .videos-desktop .main-video video");

	let current_index;
	numbers.forEach((number, key) => {
		if(number.classList.contains("active")){
			current_index = key;
		}
	});

	if(current_index != videos.length - 1){
		videos.forEach((video) => {
			const style = video.style.transform;
			let pos 		= +style.split(", ")[1].split("%")[0];
			pos -= 120;
			video.style.transform = "translate(0, " + pos + "%)";
		});

		numbers.forEach((number) => {
			number.classList.remove("active");
		});

		current_index++;
		numbers[current_index].classList.add("active");

		main_video.style.width = main_video.offsetWidth + "px";

		const newurl = videos[current_index].querySelector("video").getAttribute("src");
		main_video.setAttribute("src", newurl);
		setTimeout(() => {main_video.style.width = "auto"}, 3000);
	}
}

function VideoPlayDesktop(button){
	const video = button.parentNode.querySelector("video");

	button.style.opacity = "0";
	video.play();
	video.setAttribute("controls", "");
	setTimeout(() => {button.style.display = "none";}, 550);
}

function VideoPauseDesktop(video){
	const button = video.parentNode.querySelector(".play");

	button.style.display = "block";
	video.pause();
	video.removeAttribute("controls");
	setTimeout(() => {button.style.opacity = "1";}, 50);
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

function NewsStart(){
	const descriptions = document.querySelectorAll("main .news .description");

	descriptions.forEach((description) => {
		const primary = description.querySelector(".primary");
		description.style.height = primary.offsetHeight + "px";
		description.style.bottom = "-" + (primary.offsetHeight - 4) + "px";
	})
}

function NewsHoverIn(item){
	const description = item.querySelector(".description");
	const primary			= item.querySelector(".primary");
	const secondary 	= item.querySelector(".secondary");

	description.style.height = primary.offsetHeight + secondary.offsetHeight + "px";
	description.style.bottom = -primary.offsetHeight + "px" + 4;
}

function NewsHoverOut(item){
	const description = item.querySelector(".description");
	const primary			= item.querySelector(".primary");
	const secondary 	= item.querySelector(".secondary");

	description.style.height = primary.offsetHeight + "px";
	description.style.bottom = "-" + (primary.offsetHeight - 4) + "px";
}

Setup();