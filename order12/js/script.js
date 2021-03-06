function OpenMenu(){
	const menu = document.querySelector("#dropdown");
	const body = document.body;
	const main = document.querySelector("main");
	const header = document.querySelector("header");

	body.style.overflow = "hidden";
	menu.style.display = "block";
	setTimeout(() => {
		menu.style.opacity = "1";
		main.style.filter = "blur(5px)";
		header.style.filter = "blur(5px)";
	}, 50);
}

function CloseMenu(){
	const menu = document.querySelector("#dropdown");
	const body = document.body;
	const main = document.querySelector("main");
	const header = document.querySelector("header");

	menu.style.opacity = "0";
	main.style.filter = "none";
	header.style.filter = "none";
	setTimeout(() => {
		body.style.overflow = "visible";
		menu.style.display = "none";
	}, 550);
}

function SlideTo(button, index){
	const slider = button.parentNode.parentNode;
	const slides = slider.querySelectorAll(".slide");
	const points = button.parentNode.querySelectorAll(".point");

	slides.forEach((slide) => {
		const value = -index * 100 + "%";
		slide.style.transform = "translate(" + value + ", 0)";
	})
	points.forEach((point, key) => {
		if(key == index) point.classList.add("active");
		else point.classList.remove("active");
	});
}

function NextSlide(button){
	const slider = button.parentNode.parentNode;
	const slides = slider.querySelectorAll(".slide");
	let current_index = 0;

	let value = slides[0].style.transform;
	let index = value.split("translate(")[1].split("%")[0] / 100;
	index--;

	if(window.innerWidth >= 768){
		if(index < -(slides.length - 4)) index = -(slides.length - 4);
	} else {
		if(index < -(slides.length - 1)) index = -(slides.length - 1);
	}

	slides.forEach((slide) => {
		const value = index * 100 + "%";
		slide.style.transform = "translate(" + value + ", 0)";
	});
}

function PrevSlide(button){
	const slider = button.parentNode.parentNode;
	const slides = slider.querySelectorAll(".slide");
	let current_index = 0;

	let value = slides[0].style.transform;
	let index = value.split("translate(")[1].split("%")[0] / 100;
	index++;

	if(index > 0) index = 0;

	slides.forEach((slide) => {
		const value = index * 100 + "%";
		slide.style.transform = "translate(" + value + ", 0)";
	});
}

function Play(button){
	const root = button.parentNode;
	const video = root.querySelector("video");
	video.play();
}

function OpenSelect(){
	const select 	= document.querySelector("#calc .select");
	const opt 		= select.querySelector(".options");

	opt.style.display = "block";
	setTimeout(() => {
		opt.style.opacity = "1";
	}, 50);
}

function CloseSelect(){
	const select 	= document.querySelector("#calc .select");
	const opt 		= select.querySelector(".options");

	opt.style.opacity = "0";
	setTimeout(() => {
		opt.style.display = "none";
	}, 350);
}

function Select(index){
	const select 	= document.querySelector("#calc .select");
	const options = select.querySelectorAll(".options li");
	const span 		= select.querySelector("span");

	const img = "<img" + span.innerHTML.split("<img")[1];
	
	options.forEach((option, key) => {
		if(key == index){
			const text = option.innerHTML;
			span.innerHTML = text + img;
		}
	});
}

function Count(){
	const dom_plans 	= document.querySelectorAll("#plans .item h2");
	const dom_prices	= document.querySelectorAll("#plans .item .cost .text");
	const plan = document.querySelector("#calc .select span").innerHTML.split("<img")[0];
	const square = document.querySelector("#calc input").value;
	const dom_price = document.querySelector("#calc .result .price");
	let plans = [];
	let prices = [];

	dom_plans.forEach((plan, key) => {
		plans[key] = plan.innerHTML;
	});
	dom_prices.forEach((price, key) => {
		prices[key] = price.innerHTML.split("Стоимость: ")[1].split(" руб")[0];
	});
	const index = plans.indexOf(plan);
	if(index == -1){
		dom_price.innerHTML = "0 руб";
		return;
	}
	const price = +prices[index];
	if(square == ""){
		dom_price.innerHTML = "0 руб";
		return;
	}
	const cost = price * square;
	dom_price.innerHTML = cost + " руб";
}

function get_offset(element) {
	let offsetTop = 0;
	do {
		offsetTop  += element.offsetTop;
	} while (element = element.offsetParent);
	return offsetTop;
}

function Show(){
	const form = document.querySelector("#form");
	const services = document.querySelector("#services");
	const about = document.querySelector("#about");
	const adv = document.querySelector("#adv");
	const equipment = document.querySelector("#equipment");
	const plans = document.querySelector("#plans");
	const works = document.querySelector("#works");
	const calc = document.querySelector("#calc");
	const clients = document.querySelector("#clients");
	const reviews = document.querySelector("#reviews");
	const map = document.querySelector("#map");
	const footer = document.querySelector("footer");

	const scroll = document.documentElement.scrollTop + window.innerHeight * 0.5;

	if(scroll >= get_offset(form)){
		form.style.opacity = "1";
		form.style.transform = "translate(0, 0)";
	}
	if(scroll >= get_offset(services)){
		services.style.opacity = "1";
		services.style.transform = "translate(0, 0)";
	}
	if(scroll >= get_offset(about)){
		about.style.opacity = "1";
		about.style.transform = "translate(0, 0)";
	}
	if(scroll >= get_offset(adv)){
		adv.style.opacity = "1";
		adv.style.transform = "translate(0, 0)";
	}
	if(scroll >= get_offset(equipment)){
		equipment.style.opacity = "1";
		equipment.style.transform = "translate(0, 0)";
	}
	if(scroll >= get_offset(plans)){
		plans.style.opacity = "1";
		plans.style.transform = "translate(0, 0)";
	}
	if(scroll >= get_offset(works)){
		works.style.opacity = "1";
		works.style.transform = "translate(0, 0)";
	}
	if(scroll >= get_offset(calc)){
		calc.style.opacity = "1";
		calc.style.transform = "translate(0, 0)";
	}
	if(scroll >= get_offset(clients)){
		clients.style.opacity = "1";
		clients.style.transform = "translate(0, 0)";
	}
	if(scroll >= get_offset(reviews)){
		reviews.style.opacity = "1";
		reviews.style.transform = "translate(0, 0)";
	}
	if(scroll >= get_offset(map)){
		map.style.opacity = "1";
		map.style.transform = "translate(0, 0)";
	}
	if(scroll >= get_offset(footer)){
		footer.style.opacity = "1";
		footer.style.transform = "translate(0, 0)";
	}

}

var timeOut;
function goUp() {
   var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
   if(top > 0) {
      window.scrollBy(0,-100);
      timeOut = setTimeout('goUp()',20);
   } else clearTimeout(timeOut);
}

Show();

window.onscroll = function() {Show();}