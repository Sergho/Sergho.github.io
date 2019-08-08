var valute = "GBP";

var search = ["Men", "Register", "Women", "Brands", "Local", "Stories", "Local Stories", "Look", "Book", "Look Book",
"Fashion", "Currency", "Clothes", "Jackets", "Hoodies", "Sweatshirts", "Shorts", "Skirts",
"T-Shirts", "Suits", "Trousers", "Scarfs", "Avenue", "Books", "Glasses", "Sunglasses"];

var prices = [89.99, 47.5, 107, 89.99, 69.95, 29.95, 34.79];

var opened = false;

function Valute(){
	var menu = document.getElementById("h-t-v2");
	var icon = document.getElementById("h-t-i");

	if(menu.style.maxHeight == "0px") {
		menu.style.maxHeight = "140px";
		icon.style.transform = "rotate(180deg)";
	}
	else {
		menu.style.maxHeight = "0px";
		icon.style.transform = "rotate(0deg)";
	}
}

function ChooseValute(obj){
	var drop = document.getElementById("h-t-v2");
	var text = document.getElementById("h-t-t");
	var icon = document.getElementById("h-t-i");

	var orders = document.getElementsByClassName("orders")[0];
	if(orders != undefined){
		var valutes = orders.getElementsByTagName("sup");
		var values = orders.getElementsByTagName("span");
	}

	text.innerHTML = obj.innerHTML;
	valute = obj.innerHTML;

	if(values != undefined){
		if(valute == "GBP"){
			for(var i = 0; i < valutes.length; i++){
				values[i].innerHTML = prices[i].toFixed(2);
				valutes[i].innerHTML = "£";
			}
		}
		if(valute == "RUB"){
			for(var i = 0; i < valutes.length; i++){
				values[i].innerHTML = (prices[i] * 78.43).toFixed(2);
				valutes[i].innerHTML = "₽";
			}
		}
		if(valute == "USD"){
			for(var i = 0; i < valutes.length; i++){
				values[i].innerHTML = (prices[i] * 1.24).toFixed(2);
				valutes[i].innerHTML = "$";
			}
		}
		if(valute == "EUR"){
			for(var i = 0; i < valutes.length; i++){
				values[i].innerHTML = (prices[i] * 1.11).toFixed(2);
				valutes[i].innerHTML = "€";
			}
		}
		if(valute == "UAH"){
			for(var i = 0; i < valutes.length; i++){
				values[i].innerHTML = (prices[i] * 31.43).toFixed(2);
				valutes[i].innerHTML = "₴";
			}
		}
	}

	drop.style.maxHeight = "0px";
	icon.style.transform = "rotate(0deg)";
}

function Categories(index){
	var drops = document.getElementsByClassName("drop");
	var menus = document.getElementsByClassName("nav-item");
	var icons = document.getElementsByClassName("fa-chevron-down");
	var elements = document.getElementsByClassName("var");
	var count = elements.length;
	var catched = false;

	for(var i = 0; i < count; i++){
		elements[0].remove();
	}

	for(var i = 0; i < drops.length; i++){
		if(drops[i].style.maxHeight == "550px" && i != index){
			drops[i].style.maxHeight = "0px";
			menus[i].classList.remove("active");
			icons[i + 2].style.transform = "rotate(0deg)";
			catched = true;
		}
	}

	if(drops[index].style.maxHeight == "0px") {
		if(catched) setTimeout(function() {drops[index].style.maxHeight = "550px"}, 200);
		else setTimeout(function() {drops[index].style.maxHeight = "550px"}, 0);
		menus[index].classList.add("active");
		icons[index + 2].style.transform = "rotate(180deg)";
	} else  {
		drops[index].style.maxHeight = "0px";
		menus[index].classList.remove("active");
		icons[index + 2].style.transform = "rotate(0deg)";
	}
}

function ShowVariants(){
	var value = document.getElementById("search").value.toUpperCase();
	var variable = document.getElementsByClassName("variable")[0];
	var elements = document.getElementsByClassName("var");
	var count = elements.length;

	for(var i = 0; i < count; i++){
		elements[0].remove();
	}
	if(value.length > 1){
		for(var i = 0; i < search.length; i++){
			if(search[i].toUpperCase().indexOf(value) > -1){
				var li = document.createElement('li');
				variable.appendChild(li);
				li.classList.add("var")
				li.setAttribute("onclick", "ChooseVariant(this);");
				li.innerHTML = search[i];
			}
		}
	}
}

function ChooseVariant(obj){
	var input = document.getElementById("search");
	var elements = document.getElementsByClassName("var");
	var count = elements.length;

	input.value = obj.innerHTML;

	for(var i = 0; i < count; i++){
		elements[0].remove();
	}
}

function Active(obj){
	var ul = document.getElementsByClassName("sort-nav-bar")[0];
	var last = ul.getElementsByClassName("active")[0];

	last.classList.remove("active");
	obj.classList.add("active");
}

function Details(index){
	var info = document.getElementById("i");
	if(info != undefined){
		var heading_in = document.getElementsByClassName("heading")[index];
		var address_in = document.getElementsByClassName("address")[index];
		var description_in = document.getElementsByClassName("description")[index];

		var heading_out = info.getElementsByClassName("heading")[0];
		var address_out = info.getElementsByClassName("address")[0];
		var description_out = info.getElementsByClassName("description")[0];
		var point = info.getElementsByClassName("point")[0];

		heading_out.innerHTML = heading_in.innerHTML;
		address_out.innerHTML = address_in.innerHTML;
		description_out.innerHTML = description_in.innerHTML;
	}
}