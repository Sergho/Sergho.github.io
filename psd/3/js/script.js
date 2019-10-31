const trig   = document.querySelector(".menu");
const sprev  = document.querySelector(".slider .prev");
const snext  = document.querySelector(".slider .next");
const tprev  = document.querySelector(".our-team .prev");
const tnext  = document.querySelector(".our-team .next");
const mbtn   = document.querySelector(".questions button");
const mtimes = document.querySelector(".window .close");
const ddrop  = document.querySelector(".dropdown-item i");
const ndrop  = document.querySelector(".navbar-item i"); 

trig.addEventListener('click', Menu);
sprev.addEventListener('click', SliderPrev);
snext.addEventListener('click', SliderNext);
tprev.addEventListener('click', TeamPrev);
tnext.addEventListener('click', TeamNext);
mbtn.addEventListener('click', MOpen);
mtimes.addEventListener('click', MClose);
ddrop.addEventListener('click', DDrop);
ndrop.addEventListener('click', NDrop);

let sflag = false;
let t = setInterval(AutoTrig, 5000);

function AutoTrig(){
	if(sflag){
		SliderPrev();
		sflag = false;
	}
	else{
		SliderNext();
		sflag = true
	}
}
function Menu(){
	const drop = document.querySelector(".items");
	if(drop.style.maxHeight == '0px') drop.style.maxHeight = "1000px";
	else drop.style.maxHeight = "0px";
}
function SliderNext(){
	const slide  = document.querySelector('.slide.active');
	const slides = document.getElementsByClassName('slide');
	let index = 0;
	for(let i = 0; i < slides.length; i++){
		if(slides[i] == slide) index = i;
	}
	index++;
	if(index >= slides.length) index = slides.length - 1;
	slide.style.transform = "translate(-100%, 0)";
	slides[index].style.transform = "translate(0, 0)";
	slide.classList.remove("active");
	slides[index].classList.add("active");
}
function SliderPrev(){
	const slide  = document.querySelector('.slide.active');
	const slides = document.getElementsByClassName('slide');
	let index = 0;
	for(let i = 0; i < slides.length; i++){
		if(slides[i] == slide) index = i;
	}
	index--;
	if(index < 0) index = 0;
	slide.style.transform = "translate(100%, 0)";
	slides[index].style.transform = "translate(0, 0)";
	slide.classList.remove("active");
	slides[index].classList.add("active");
}
function TeamPrev(){
	const active = document.querySelector(".person.active");
	const people = document.getElementsByClassName("person");
	let index = 0;
	for(let i = 0; i < people.length; i++){
		if(people[i] == active) index = i;
	}
	index--;
	if(index < 0) index = 0;
	active.style.transform = "translate(100%, 0)";
	people[index].style.transform = "translate(0, 0)";
	active.classList.remove("active");
	people[index].classList.add("active");
}
function TeamNext(){
	const active = document.querySelector(".person.active");
	const people = document.getElementsByClassName("person");
	let index = 0;
	for(let i = 0; i < people.length; i++){
		if(people[i] == active) index = i;
	}
	index++;
	if(index >= people.length) index = people.length - 1;
	active.style.transform = "translate(-100%, 0)";
	people[index].style.transform = "translate(0, 0)";
	active.classList.remove("active");
	people[index].classList.add("active");
}
function MOpen(){
	const bg   = document.querySelector(".modal");
	const win  = document.querySelector(".window");
	const body = document.querySelector("body");

	window.scrollTo(0, 0);
	body.style.overflow = "hidden";
	bg.style.display = "block";
	win.style.display = "block";
}
function MClose(){

	const bg   = document.querySelector(".modal");
	const win  = document.querySelector(".window");
	const body = document.querySelector("body");

	body.style.overflow = "auto";
	bg.style.display = "none";
	win.style.display = "none";
}
function DDrop(){
	const drop = document.querySelector(".dropdown-item")
	if(drop.style.height == "30px") drop.style.height = "120px";
	else drop.style.height = "30px";
}
function NDrop(){
	const drop = document.querySelector(".navbar-item")
	if(drop.style.height == "50px") drop.style.height = "150px";
	else drop.style.height = "50px";
}