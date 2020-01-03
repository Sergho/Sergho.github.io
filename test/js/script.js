function DropdownToggle(){
	// Кнопка меню (три полосочки)
	const burger 		= document.querySelector("header .nav .dropdown-burger");
	// Блок затемнения фона
	const darkness 	= document.querySelector(".darkness");
	// Само выпадающее меню
	const menu			= document.querySelector("header .nav .dropdown-menu");

	burger.addEventListener("click", () => {	// Открываем, показываем меню
		document.body.style.overflow = "hidden"; // Убираем прокрутку страницы
		darkness.style.display 	= "block";
		menu.style.transform 		= "translate(0, 0)";
		setTimeout(function(){darkness.style.opacity	= "1";}, 50);
	});
	darkness.addEventListener("click", () => {	// Закрываем меню
		document.body.style.overflow = "visible"; // Убираем прокрутку страницы
		menu.style.transform = "translate(-101%, 0)";
		darkness.style.opacity = "0";
		setTimeout(function(){darkness.style.display = "none";}, 550);
	});

}

function ScrollTop(){
	// Кнопка
	const btn = document.querySelector(".scroll-top .chevron");

	btn.addEventListener("click", function(){
		// Прокручиваем в начало
		$('html, body').animate({scrollTop: 0}, 1000);
	});
}
function Auth(){		// login
	// Окно авторизации
	const modal = document.querySelector("#auth");
	// Темнота
	const darkness = document.querySelector(".darkness");
	// Крестик выхода
	const exit = document.querySelector(".exit");

	if(darkness.style.display != "block"){
		darkness.style.display = "block";
		setTimeout(function(){darkness.style.opacity = "1";}, 50);
		setTimeout(function(){modal.style.opacity = "1";}, 50);
	} else {
		modal.style.opacity = "0";
		darkness.style.opacity = "0";
		setTimeout(function(){darkness.style.display = "none";}, 550);
	}

}

<<<<<<< HEAD
/* --------------- Setting and removing a tick	--------------------- */

function Tick(elem){
	// Чекбокс
	const chbox = document.querySelector("header form .confirm input");
	// Галочка
	const tick  = document.querySelector("header form .confirm .visible .tick");

	if(chbox.checked) tick.style.opacity = "0";
	else tick.style.opacity = "1";
	console.log(chbox.checked);
}
=======
DropdownToggle();
ScrollTop();
>>>>>>> parent of 7ca151b... end of main
